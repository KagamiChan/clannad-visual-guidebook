import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const webRoot = path.resolve(here, '..')
const repoRoot = path.resolve(webRoot, '..')

const srcGenerated = path.join(repoRoot, 'generated')
const dstGenerated = path.join(webRoot, 'src', 'generated')

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function copyDir(srcDir, dstDir) {
  await ensureDir(dstDir)
  // Node 16+ supports fs.cp
  await fs.cp(srcDir, dstDir, { recursive: true, force: true })
}

async function copyFile(srcFile, dstFile) {
  await ensureDir(path.dirname(dstFile))
  await fs.copyFile(srcFile, dstFile)
}

async function main() {
  const daysSrc = path.join(srcGenerated, 'days')
  const auxSrc = path.join(srcGenerated, 'aux-pages')

  const daysDst = path.join(dstGenerated, 'days')
  const auxDst = path.join(dstGenerated, 'aux-pages')

  await copyDir(daysSrc, daysDst)
  // aux-pages is optional for MVP but cheap to sync
  try {
    await copyDir(auxSrc, auxDst)
  } catch {
    // ignore if not present
  }

  // summary is optional but handy
  try {
    await copyFile(path.join(srcGenerated, 'summary.json'), path.join(dstGenerated, 'summary.json'))
  } catch {
    // ignore if not present
  }

  console.log(`[sync-generated] Copied to ${dstGenerated}`)
}

main().catch((err) => {
  console.error('[sync-generated] Failed:', err)
  process.exitCode = 1
})
