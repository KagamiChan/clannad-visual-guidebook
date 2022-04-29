import { memo, useMemo, FC } from 'react'
import ReactFlow, { Node, Edge, MarkerType, Position, Handle, NodeTypes } from 'react-flow-renderer'
import _ from 'lodash'
import dagre from 'dagre'
import styled from 'styled-components'

import { box, line } from '../../extracted/2.json'
import { Box, End } from './model'

const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const nodeWidth = 272
const nodeHeight = 36

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR'
  dagreGraph.setGraph({ rankdir: direction })

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

const nodes = _.flatten<any>(box).map((node: Box) => ({
  id: node.ref,
  data: { label: node.text, node },
  position: { x: node.x, y: node.y },
  type: 'event',
}))

const edges = _.map(line as End[][], (edge: End[]) => {
  const [start, ...rest] = edge
  const end = _.last(rest)!
  return {
    id: `${start.ref}-${end.ref}`,
    source: start.ref!,
    target: end.ref!,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  }
})

console.log(nodes, line, edges)

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges)

const maxHeight = _.maxBy(layoutedNodes, 'position.y')!.position.y + nodeHeight + 40
const maxWidth = _.maxBy(layoutedNodes, 'position.x')!.position.x + nodeWidth + 40

const NodeBody = styled.div`
  padding: 10px;
  border-radius: 3px;
  width: 250px;
  font-size: 16px;
  color: #222;
  text-align: center;
  border-width: 1px;
  border-style: solid;
  background: #fff;
  border-color: #1a192b;
`

const Tag = styled.span`
  background-color:blue;
  color: #fff;
  border-radius: 4px;
  padding: 2px
`

const EventNode = memo(({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <NodeBody>
        <span>{data.label}</span>
        {data.node.type === 'selection' && <Tag>选择</Tag>}
        </NodeBody>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
})

export const App: FC<any> = () => {
  const nodeTypes: NodeTypes = useMemo(() => ({ event: EventNode }), [])

  return (
    <div className="App">
      <div style={{ height: maxHeight, width: maxWidth }}>
        <ReactFlow
          nodes={layoutedNodes}
          edges={layoutedEdges}
          nodeTypes={nodeTypes}
          preventScrolling={false}
          nodesDraggable={false}
          zoomOnScroll={false}
          nodesConnectable={false}
          elementsSelectable={false}
        />
      </div>
    </div>
  )
}
