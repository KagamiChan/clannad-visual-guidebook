import { FC, lazy, Suspense } from 'react'
import _ from 'lodash'
import { loadPageData } from './load-page-data'
import { pageDefinitions } from './page-definitions'
import { FlowChart } from './components/charting/flow-chart'

const Chart = lazy(async () => {
  const { nodes, edges } = await loadPageData(pageDefinitions[0])

  return {
    default: () => <FlowChart nodes={nodes} edges={edges} />,
  }
})

export const App: FC<any> = () => {
  // console.log(layoutedNodes, maxWidth)

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Chart />
      </Suspense>
    </div>
  )
}
