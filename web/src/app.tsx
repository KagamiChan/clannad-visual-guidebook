import { useState } from 'react'
import ReactFlow, { Node, Edge } from 'react-flow-renderer'
import _ from 'lodash'

import { box, line } from '../../extracted/2.json'
import { Box } from './model'

const boxes: Box[] = _.flatten<any>(box)

export function App() {
  return (
    <div className="App">
      <ReactFlow />
    </div>
  )
}
