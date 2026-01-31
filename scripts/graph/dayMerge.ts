import type { DayGraph, DayKey, GraphEdge, GraphNode, PageIR, SizeSet } from './types'

const DATE_RE = /^(\d{1,2})月(\d{1,2})日/

function normalizeDayKey(label: string): DayKey | undefined {
  const m = label.match(DATE_RE)
  if (!m) return undefined
  const mm = m[1].padStart(2, '0')
  const dd = m[2].padStart(2, '0')
  return `${mm}-${dd}`
}

function extractDayLabelFromHeader(ir: PageIR): string | undefined {
  const raw = ir.header?.dateC ?? ir.header?.dateE
  if (!raw) return undefined
  const matches = raw.match(/(\d{1,2}月\d{1,2}日)/g)
  if (matches && matches.length) return matches[matches.length - 1]
  return undefined
}

function nodeY(node: GraphNode, sizeSet: SizeSet): number {
  return node.pixelPosBySizeSet[sizeSet]?.y ?? Number.POSITIVE_INFINITY
}

function isDateMarker(node: GraphNode): boolean {
  if (!node.text) return false
  return node.kind === 'Textbox_Date' && DATE_RE.test(node.text)
}

export function mergePagesToDays(
  pages: PageIR[],
  sizeSetForSegmentation: SizeSet = 0,
): {
  days: Map<DayKey, DayGraph>
  auxPages: PageIR[]
} {
  const days = new Map<DayKey, DayGraph>()
  const auxPages: PageIR[] = []

  const ensureDay = (dayKey: DayKey, label: string | undefined, page: number) => {
    const existing = days.get(dayKey)
    if (existing) {
      if (!existing.sourcePages.includes(page)) existing.sourcePages.push(page)
      return existing
    }
    const g: DayGraph = {
      dayKey,
      label,
      sourcePages: [page],
      nodes: [],
      edges: [],
      crossDayEdges: [],
      jumps: [],
    }
    days.set(dayKey, g)
    return g
  }

  const nodeToDay = new Map<string, DayKey>()

  // 1) Assign nodes to dayKey
  for (const ir of pages) {
    const dateNodes = ir.nodes
      .filter(isDateMarker)
      .sort((a, b) => nodeY(a, sizeSetForSegmentation) - nodeY(b, sizeSetForSegmentation))

    const headerLabel = extractDayLabelFromHeader(ir)
    const headerKey = headerLabel ? normalizeDayKey(headerLabel) : undefined

    if (dateNodes.length === 0 && !headerKey) {
      auxPages.push(ir)
      continue
    }

    // Sort all nodes by y
    const sortedNodes = [...ir.nodes].sort(
      (a, b) => nodeY(a, sizeSetForSegmentation) - nodeY(b, sizeSetForSegmentation),
    )

    let currentLabel = dateNodes[0]?.text ?? headerLabel
    let currentKey = (currentLabel && normalizeDayKey(currentLabel)) ?? headerKey
    if (!currentKey) {
      auxPages.push(ir)
      continue
    }

    // Step through y-order, updating current day at each date marker.
    for (const n of sortedNodes) {
      if (isDateMarker(n)) {
        const k = normalizeDayKey(n.text!)
        if (k) {
          currentKey = k
          currentLabel = n.text
        }
      }
      nodeToDay.set(n.nodeId, currentKey)
      const day = ensureDay(currentKey, currentLabel, ir.page)
      day.nodes.push({ ...n, dayKey: currentKey })
    }

    // jumps tracked later
  }

  // 2) Assign edges to dayKey and collect cross-day
  for (const ir of pages) {
    for (const e of ir.edges) {
      const fromDay = e.from ? nodeToDay.get(e.from) : undefined
      const toDay = e.to ? nodeToDay.get(e.to) : undefined

      if (!fromDay && !toDay) continue

      if (fromDay && toDay && fromDay === toDay) {
        const day = days.get(fromDay)
        if (day) day.edges.push({ ...e, dayKey: fromDay, crossDay: false })
      } else {
        const anchorDay = fromDay ?? toDay
        if (!anchorDay) continue
        const day = days.get(anchorDay)
        if (day) day.crossDayEdges.push({ ...e, fromDay, toDay })
      }
    }

    // 3) Collect jumps
    for (const n of ir.nodes) {
      const fromDay = nodeToDay.get(n.nodeId)
      if (!fromDay) continue
      const day = days.get(fromDay)
      if (!day) continue
      for (const j of n.jumps) {
        day.jumps.push({ fromNodeId: n.nodeId, fromDay, jump: j })
      }
    }
  }

  // Normalize sourcePages ordering
  for (const d of days.values()) d.sourcePages.sort((a, b) => a - b)

  return { days, auxPages }
}
