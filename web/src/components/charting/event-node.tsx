import { rgba } from 'polished'
import { memo, useMemo, FC } from 'react'
import ReactFlow, { Node, Edge, MarkerType, Position, Handle, NodeTypes } from 'react-flow-renderer'
import styled from 'styled-components'

const NodeBody = styled.div`
  padding: 10px;
  border-radius: 1.5rem;
  min-width: 100px;
  font-size: 16px;
  color: #222;
  text-align: center;
  background: ${rgba('#035096', 0.7)};
  box-shadow: inset 0 0 1em #ffffff, 4px 4px 4px ${rgba('black', 0.5)};
  white-space: nowrap;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
`

const Tag = styled.span`
  background-color: #035096;
  color: #fff;
  border-radius: 4px;
  padding: 2px;
  padding: 0.25rem;
  margin-left: 0.5rem;
`

export const EventNode: FC<any> = memo(({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <NodeBody>
        <span>{data.label}</span>
        {/* {data.node.type === 'selection' && <Tag>选择肢</Tag>} */}
        {data.node.type === 'condition' && <Tag>前提</Tag>}
      </NodeBody>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
})
