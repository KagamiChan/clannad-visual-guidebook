import { useMemo, FC, useState } from 'react'
import ReactFlow, { Node, NodeTypes, Edge } from 'react-flow-renderer'
import _ from 'lodash'
import { useAtomValue } from 'jotai'
import useDeepCompareEffect from 'use-deep-compare-effect'

import { EventNode } from './event-node'
import { nodeHeight, nodeWidth, getELKLayoutedElements } from '../../utils'
import { ChartObserver } from './chart-observer'
import { nodeDimensionsAtom } from '../../states'

interface Props {
  nodes: Node[]
  edges: Edge[]
}

export const FlowChart: FC<Props> = ({ nodes, edges }) => {
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
