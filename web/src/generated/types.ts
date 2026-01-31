export type SizeSet = 0 | 1

export type PixelPos = { x: number; y: number }

export type Jump =
  | {
      kind: 'gotopage'
      toPage: number
      toAnchor?: string
    }
  | {
      kind: 'gotolink'
      toAnchor: string
    }

export type GraphNode = {
  nodeId: string
  page: number
  dayKey?: string
  kind: string
  text?: string
  anchors: string[]
  jumps: Jump[]
  // legacy geometry (ignored in MVP)
  pixelPosBySizeSet?: Partial<Record<SizeSet, PixelPos>>
}

export type GraphEdge = {
  edgeId: string
  page: number
  dayKey?: string
  from: string
  to: string
  decorative?: boolean
  // legacy geometry (ignored in MVP)
  waypointsBySizeSet?: Partial<Record<SizeSet, PixelPos[]>>
}

export type CrossDayEdge = GraphEdge & {
  fromDay: string
  toDay: string
}

export type DayGraph = {
  dayKey: string
  label: string
  sourcePages: number[]
  nodes: GraphNode[]
  edges: GraphEdge[]
  crossDayEdges?: CrossDayEdge[]
}

export type DayIndexEntry = {
  dayKey: string
  label: string
  sourcePages: number[]
  nodeCount: number
  edgeCount: number
  crossDayEdgeCount: number
}
