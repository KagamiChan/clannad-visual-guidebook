import type { DiffReport, PageIR } from './types'

function summarize(ir: PageIR) {
  const jumpCount = ir.nodes.reduce((n, node) => n + node.jumps.length, 0)
  const anchorCount = ir.nodes.reduce((n, node) => n + node.anchors.length, 0)
  return {
    nodeCount: ir.nodes.length,
    edgeCount: ir.edges.length,
    jumpCount,
    anchorCount,
    unknownStatements: ir.unknownStatements,
  }
}

function jumpTargets(ir: PageIR): string[] {
  const targets: string[] = []
  for (const n of ir.nodes) {
    for (const j of n.jumps) {
      if (j.kind === 'gotopage') targets.push(`gotopage:${j.toPage}:${j.toAnchor ?? ''}`)
      if (j.kind === 'gotolink') targets.push(`gotolink:${j.toAnchor}`)
    }
  }
  targets.sort()
  return targets
}

function anchors(ir: PageIR): string[] {
  const a: string[] = []
  for (const n of ir.nodes) a.push(...n.anchors)
  a.sort()
  return a
}

export function diffPageIR(page: number, guidebook?: PageIR, next?: PageIR): DiffReport {
  const diffs: string[] = []

  const g = guidebook ? summarize(guidebook) : undefined
  const n = next ? summarize(next) : undefined

  if (g && n) {
    for (const k of [
      'nodeCount',
      'edgeCount',
      'jumpCount',
      'anchorCount',
      'unknownStatements',
    ] as const) {
      if (g[k] !== n[k]) diffs.push(`${k} guidebook=${g[k]} next=${n[k]}`)
    }

    const gJ = jumpTargets(guidebook)
    const nJ = jumpTargets(next)
    if (gJ.join('\n') !== nJ.join('\n')) diffs.push('jumpTargets differ')

    const gA = anchors(guidebook)
    const nA = anchors(next)
    if (gA.join('\n') !== nA.join('\n')) diffs.push('anchors differ')
  } else {
    if (!g) diffs.push('missing guidebook IR')
    if (!n) diffs.push('missing next IR')
  }

  return { page, guidebook: g, next: n, diffs }
}
