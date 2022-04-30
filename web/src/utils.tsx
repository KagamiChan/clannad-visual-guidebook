import { Node, Edge, Position } from 'react-flow-renderer'
import dagre from 'dagre'
import ELK from 'elkjs/lib/elk.bundled'

export const nodeWidth = 272
export const nodeHeight = 36

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const dagreGraph = new dagre.graphlib.Graph()
  dagreGraph.setDefaultEdgeLabel(() => ({}))
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({
    rankdir: direction,
    ranksep: 80,
    ranker: 'network-simplex',
  })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    node.targetPosition = isHorizontal ? Position.Left : Position.Top
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    }

    return node
  })

  return { nodes, edges }
}

export const getELKLayoutedElements = async (
  nodes: Node[],
  edges: Edge[],
  nodeDimensions: { [key: string]: { width: number; height: number } },
): Promise<{ nodes: Node[]; edges: Edge[] }> => {
  const elk = new ELK()

  const graph = {
    id: 'root',

    children: nodes.map(({ id }) => ({
      id,
      width: nodeDimensions[id]?.width ?? nodeWidth,
      height: nodeDimensions[id]?.height ?? nodeHeight,
    })),
    edges: edges.map(({ id, source, target }) => ({ id, sources: [source], targets: [target] })),
  }

  const result = await elk.layout(graph, {
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'DOWN',
      // 'elk.layered.spacing.nodeNodeBetweenLayers': '60',
      // 'elk.spacing.componentComponent': '25',
      // 'elk.spacing.nodeNode': '50',
      'elk.layered.spacing.baseValue': '60',
      'elk.edgeRouting': 'ORTHOGONAL', //'SPLINES',
      'elk.layered.nodePlacement.bk.fixedAlignment': 'BALANCED',
      'elk.layered.nodePlacement.bk.edgeStraightening': 'IMPROVE_STRAIGHTNESS',
      'elk.layered.nodePlacement.favorStraightEdges': 'true',
      'elk.layered.crossingMinimization.forceNodeModelOrder': 'true',
      // 'elk.layered.crossingMinimization.semiInteractive': 'true',
      // 'elk.layered.crossingMinimization.strategy': 'INTERACTIVE',
    },
  })

  return {
    nodes: nodes.map((n) => {
      const res = result.children?.find((c) => c.id === n.id)!
      return {
        ...n,
        position: {
          x: res.x!,
          y: res.y!,
        },
      }
    }),
    edges,
  }
}
