export type SizeSet = 0 | 1

export type SourceLoc = {
  file: string
  page: number
  stmtIndex: number
}

export type PixelPos = { x: number; y: number }

export type GraphNode = {
  nodeId: string
  page: number
  boxRef?: { varName: string; row?: number; col?: number; index?: number }
  kind: string
  text?: string
  routeHints?: string
  pixelPosBySizeSet: Record<SizeSet, PixelPos | undefined>
  anchors: string[]
  jumps: Jump[]
  source: SourceLoc
}

export type GraphEdge = {
  edgeId: string
  page: number
  from?: string
  to?: string
  waypointsBySizeSet: Record<SizeSet, PixelPos[]>
  decorative: boolean
  source: SourceLoc
}

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

export type PageHeader = {
  route?: string
  routeC?: string
  routeE?: string
  dateC?: string
  dateE?: string
}

export type PageFooter = {
  page?: number
}

export type PageIR = {
  page: number
  sourceFile: string
  header?: PageHeader
  footer?: PageFooter
  nodes: GraphNode[]
  edges: GraphEdge[]
  unknownStatements: number
  notes: string[]
}

export type DiffReport = {
  page: number
  guidebook?: {
    nodeCount: number
    edgeCount: number
    jumpCount: number
    anchorCount: number
    unknownStatements: number
  }
  next?: {
    nodeCount: number
    edgeCount: number
    jumpCount: number
    anchorCount: number
    unknownStatements: number
  }
  diffs: string[]
}

export type DayKey = string // e.g. '04-20' or 'aux:page24'

export type DayGraph = {
  dayKey: DayKey
  label?: string
  sourcePages: number[]
  nodes: Array<GraphNode & { dayKey: DayKey }>
  edges: Array<GraphEdge & { dayKey?: DayKey; crossDay?: boolean }>
  crossDayEdges: Array<GraphEdge & { fromDay?: DayKey; toDay?: DayKey }>
  jumps: Array<{ fromNodeId: string; fromDay?: DayKey; jump: Jump }>
}
