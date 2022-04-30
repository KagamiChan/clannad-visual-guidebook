import { useMemo, FC, useState, useEffect } from 'react'
import ReactFlow, { MarkerType, Node, NodeTypes, Edge } from 'react-flow-renderer'
import _ from 'lodash'
import { useAtomValue } from 'jotai'
import useDeepCompareEffect from 'use-deep-compare-effect'

import { EventNode } from './components/charting/event-node'
import { box, line } from '../../extracted/2.json'
import { Box, End } from './model'
import { getLayoutedElements, nodeHeight, nodeWidth, getELKLayoutedElements } from './utils'
import { ChartObserver } from './components/charting/chart-observer'
import { nodeDimensionsAtom } from './states'

window._ = _

const nodes = _.flatten<any>(box).map((node: Box) => ({
  id: node.__ref,
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
      id: `${start.__ref}-${end.__ref}`,
      source: start.__ref!,
      target: end.__ref!,
      type: 'straight',
      // markerEnd: {
      //   type: MarkerType.Arrow,
      // },
    }
  },
)

console.log(nodes, line, edges)

// const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges)

// getELKLayoutedElements(nodes, edges)

// const maxHeight = _.maxBy(layoutedNodes, 'position.y')!.position.y + nodeHeight + 40
// const maxWidth = _.maxBy(layoutedNodes, 'position.x')!.position.x + nodeWidth + 40

export const App: FC<any> = () => {
  const nodeTypes: NodeTypes = useMemo(() => ({ event: EventNode }), [])

  const [config, setConfig] = useState<{
    layoutedNodes: Node[]
    layoutedEdges: Edge[]
  }>({
    layoutedNodes: [],
    layoutedEdges: [],
  })

  const nodeDimensions = useAtomValue(nodeDimensionsAtom)

  useDeepCompareEffect(() => {
    const run = async () => {
      console.log('Updating layout')
      const { nodes: layoutedNodes, edges: layoutedEdges } = await getELKLayoutedElements(
        nodes,
        edges,
        nodeDimensions,
      )
      setConfig({ layoutedNodes, layoutedEdges })
    }

    run()
  }, [nodeDimensions])

  const { layoutedNodes, layoutedEdges } = config

  const maxHeight = useMemo(
    () => (_.maxBy(layoutedNodes, 'position.y')?.position.y ?? 0) + nodeHeight + 40,
    [layoutedNodes],
  )
  const maxWidth = useMemo(
    () => (_.maxBy(layoutedNodes, 'position.x')?.position.x ?? 0) + nodeWidth + 40,
    [layoutedNodes],
  )

  // console.log(layoutedNodes, maxWidth)

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
          zoomOnDoubleClick={false}
          nodesConnectable={false}
          elementsSelectable={false}
          panOnDrag={false}
        >
          <ChartObserver />
        </ReactFlow>
      </div>
    </div>
  )
}
