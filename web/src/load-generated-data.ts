import type { DayGraph, DayIndexEntry } from './generated/types'

// These files are synced from repo-root `generated/` by `web/scripts/sync-generated.mjs`.
import dayIndex from './generated/days/index.json'

const dayModules = import.meta.glob('./generated/days/*.json')

export function getDayIndex(): DayIndexEntry[] {
  return dayIndex as DayIndexEntry[]
}

export async function loadDayGraph(dayKey: string): Promise<DayGraph> {
  const path = `./generated/days/${dayKey}.json`
  const loader = dayModules[path]

  if (!loader) {
    throw new Error(`Unknown dayKey: ${dayKey} (missing ${path})`)
  }

  const mod = (await loader()) as any
  return (mod.default ?? mod) as DayGraph
}

export function buildPageToDayKeyMap(index: DayIndexEntry[]): Map<number, string> {
  const map = new Map<number, string>()
  for (const entry of index) {
    for (const page of entry.sourcePages) {
      map.set(page, entry.dayKey)
    }
  }
  return map
}
