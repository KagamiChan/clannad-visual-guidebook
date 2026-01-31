import path from "path";
import fs from "fs-extra";
import glob from "glob";
import { extractPageIR } from "./graph/astExtract";
import { diffPageIR } from "./graph/diffOracle";
import { mergePagesToDays } from "./graph/dayMerge";
import type { PageIR } from "./graph/types";

type SourceSet = "guidebook" | "next";

function listPageFiles(root: string): string[] {
  const pattern = path.join(root, "page*.js").replace(/\\/g, "/");
  return glob.sync(pattern, { windowsPathsNoEscape: true });
}

function byPageNumber(filePath: string): number {
  const m = path.basename(filePath).match(/page(\d+)\.js$/i);
  return m ? Number(m[1]) : Number.POSITIVE_INFINITY;
}

async function extractAll(sourceSet: SourceSet, dataDir: string, outDir: string): Promise<Map<number, PageIR>> {
  const files = listPageFiles(dataDir).sort((a, b) => byPageNumber(a) - byPageNumber(b));
  const map = new Map<number, PageIR>();
  await fs.ensureDir(outDir);

  for (const file of files) {
    const code = await fs.readFile(file, "utf8");
    const relFile = path.relative(process.cwd(), file).replace(/\\/g, "/");
    const ir = extractPageIR(relFile, code, { note: sourceSet });
    map.set(ir.page, ir);
    await fs.writeJson(path.join(outDir, `${ir.page}.json`), ir, { spaces: 2 });
  }

  return map;
}

async function main() {
  const root = process.cwd();

  const guidebookDir = path.join(root, "guidebook", "Data");
  const nextDir = path.join(root, "next", "Data");

  const outRoot = path.join(root, "generated");
  const irGuidebookDir = path.join(outRoot, "graph-ir", "guidebook");
  const irNextDir = path.join(outRoot, "graph-ir", "next");
  const diffDir = path.join(outRoot, "diff");
  const daysDir = path.join(outRoot, "days");
  const auxDir = path.join(outRoot, "aux-pages");

  await fs.ensureDir(outRoot);

  const guidebook = await extractAll("guidebook", guidebookDir, irGuidebookDir);
  const next = await extractAll("next", nextDir, irNextDir);

  // Diff oracle
  await fs.ensureDir(diffDir);
  const pages = Array.from(new Set([...guidebook.keys(), ...next.keys()])).sort((a, b) => a - b);

  let diffCount = 0;
  for (const p of pages) {
    const report = diffPageIR(p, guidebook.get(p), next.get(p));
    if (report.diffs.length) diffCount++;
    await fs.writeJson(path.join(diffDir, `${p}.json`), report, { spaces: 2 });
  }

  // Day merge (canonical = guidebook)
  const pageIRs = pages
    .map((p) => guidebook.get(p))
    .filter((x): x is PageIR => Boolean(x));

  const { days, auxPages } = mergePagesToDays(pageIRs, 0);

  await fs.emptyDir(daysDir);
  await fs.ensureDir(daysDir);

  const dayIndex: Array<{ dayKey: string; label?: string; sourcePages: number[]; nodeCount: number; edgeCount: number; crossDayEdgeCount: number }> = [];

  for (const [dayKey, g] of Array.from(days.entries()).sort(([a], [b]) => a.localeCompare(b))) {
    dayIndex.push({
      dayKey,
      label: g.label,
      sourcePages: g.sourcePages,
      nodeCount: g.nodes.length,
      edgeCount: g.edges.length,
      crossDayEdgeCount: g.crossDayEdges.length,
    });
    await fs.writeJson(path.join(daysDir, `${dayKey}.json`), g, { spaces: 2 });
  }

  await fs.writeJson(path.join(daysDir, "index.json"), dayIndex, { spaces: 2 });

  await fs.emptyDir(auxDir);
  await fs.ensureDir(auxDir);
  for (const p of auxPages) {
    await fs.writeJson(path.join(auxDir, `${p.page}.json`), p, { spaces: 2 });
  }

  await fs.writeJson(
    path.join(outRoot, "summary.json"),
    {
      pages: pages.length,
      diffPages: diffCount,
      days: days.size,
      auxPages: auxPages.length,
      outRoot: "generated",
    },
    { spaces: 2 },
  );

  // Print summary for terminal logs
  console.log(`Extracted pages: ${pages.length}`);
  console.log(`Diff pages with discrepancies: ${diffCount}`);
  console.log(`Day files: ${days.size}`);
  console.log(`Aux pages: ${auxPages.length}`);
  console.log(`Outputs written under: ${outRoot}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
