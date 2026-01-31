import type { Edge, Node } from 'react-flow-renderer'
import type { DayGraph, GraphNode } from './types'

export type GeneratedNodeData = {
  label: string
  nodeId: string
  kind: string
  page: number
  anchors: string[]
  jumps: GraphNode['jumps']
}

export function dayGraphToReactFlow(day: DayGraph): { nodes: Node[]; edges: Edge[] } {
  const nodes: Node[] = day.nodes
    .filter((n) => n.kind !== 'Array')
    .map((n) => {
      const label = n.text?.trim() ? n.text.trim() : n.kind || n.nodeId
      const data: GeneratedNodeData = {
        label,
        nodeId: n.nodeId,
        kind: n.kind,
        page: n.page,
        anchors: n.anchors ?? [],
        jumps: n.jumps ?? [],
      }

      return {
        id: n.nodeId,
        type: 'event',
        data,
        position: { x: 0, y: 0 },
      }
    })

  const edges: Edge[] = day.edges
    .filter((e) => !e.decorative)
    .map((e) => ({
      id: e.edgeId,
      source: e.from,
      target: e.to,
      type: 'straight',
    }))

  return { nodes, edges }
}
