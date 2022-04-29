import { useState } from 'react'
import ReactFlow, { Node, Edge, MarkerType, Position } from 'react-flow-renderer'
import _ from 'lodash'
import dagre from 'dagre';

import { box, line } from '../../extracted/2.json'
import { Box, End } from './model'


const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? Position.Left : Position.Top;
    node.sourcePosition = isHorizontal ? Position.Right : Position.Bottom;

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
};

const nodes = _.flatten<any>(box).map((node: Box) => ({
  id: node.ref,
  data: { label: node.text },
  position: { x: node.x, y: node.y },
}))

const edges: Edge[] = _.map<any>(line, (edge: End[]) => {
  const [start, ...rest] = edge
  const end = _.last(rest)!
  return {
    id: `${start.ref}-${end.ref}`,
    source: start.ref,
    target: end.ref,
    type: 'smoothstep',
    markerEnd: {
      type: MarkerType.Arrow,
    },
  }
})

console.log(nodes, line, edges)

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(nodes, edges);

export function App() {
  return (
    <div className="App">
      <div style={{ height: '100vh', width: '100vw' }}>
        <ReactFlow nodes={layoutedNodes} edges={layoutedEdges} />
      </div>
    </div>
  )
}
