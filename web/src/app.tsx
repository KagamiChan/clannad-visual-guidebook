import { useMemo, FC, useState, useEffect } from 'react'
import ReactFlow, { MarkerType, NodeTypes } from 'react-flow-renderer'
import _ from 'lodash'

import { EventNode } from './components/charting/event-node'
import { box, line } from '../../extracted/15.json'
import { Box, End } from './model'
import { getLayoutedElements, nodeHeight, nodeWidth, getELKLayoutedElements } from './utils'

const nodes = _.flatten<any>(box).map((node: Box) => ({
  id: node.ref,
  data: { label: node.text, node },
  position: { x: node.x, y: node.y },
  type: 'event',
}))

const edges = _.map(
  _.filter(line as End[][], (l) => _.isArray(l)),
  (edge: End[]) => {
    const [start, ...rest] = edge
    const end = _.last(rest)!
    return {
      id: `${start.ref}-${end.ref}`,
      source: start.ref!,
      target: end.ref!,
      type: 'straight',
      markerEnd: {
        type: MarkerType.Arrow,
      },
    }
  },
)

console.log(nodes, line, edges)

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges)

getELKLayoutedElements(nodes, edges)

const maxHeight = _.maxBy(layoutedNodes, 'position.y')!.position.y + nodeHeight + 40
const maxWidth = _.maxBy(layoutedNodes, 'position.x')!.position.x + nodeWidth + 40

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
          panOnDrag={false}
        />
      </div>
    </div>
  )
}