import { memo, useMemo, FC } from 'react'
import ReactFlow, { Node, Edge, MarkerType, Position, Handle, NodeTypes } from 'react-flow-renderer'
import styled from 'styled-components'

const NodeBody = styled.div`
  padding: 10px;
  border-radius: 3px;
  min-width: 100px;
  font-size: 16px;
  color: #222;
  text-align: center;
  background: #fff;
  box-shadow: 0 1.6px 3.6px 0 rgb(0 0 0 / 13%), 0 0.3px 0.9px 0 rgb(0 0 0 / 11%);
  border: 1px solid rgb(138, 136, 134);
  white-space: nowrap;
`

const Tag = styled.span`
  background-color: #0078d4;
  color: #fff;
  border-radius: 4px;
  padding: 2px;
  margin-left: 0.5rem;
`

export const EventNode: FC<any> = memo(({ data }) => {
  return (
    <>
      <Handle type="target" position={Position.Top} />
      <NodeBody>
        <span>{data.label}</span>
        {data.node.type === 'selection' && <Tag>选择肢</Tag>}
        {data.node.type === 'condition' && <Tag>前提</Tag>}
      </NodeBody>
      <Handle type="source" position={Position.Bottom} />
    </>
  )
})
