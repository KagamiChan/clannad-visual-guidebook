import { PageDefinition } from './page-definitions'
import pMap from 'p-map'
import _ from 'lodash'
import { Box, End } from './model'

export const loadPageData = async (pageDefinition: PageDefinition) => {
  const data = await pMap(pageDefinition.sources, async (source) => import(`./data/${source}.json`))

  const nodes = _.flatMap(data, (d) =>
    _.flatten<any>(d.box).map((node: Box) => ({
      id: node.__ref,
      data: { label: node.text, node },
      position: { x: node.x, y: node.y },
      type: 'event',
    })),
  )

  const edges = _.flatMap(data, (d) =>
    _.map(
      _.filter(d.line as End[][], (l) => _.isArray(l)),
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
    ),
  )

  console.log(nodes, edges)

  return {
    nodes: _.filter(nodes, (n) => !pageDefinition.excluded?.nodes?.includes(n.id)),
    edges: _.filter(edges, (n) => !pageDefinition.excluded?.edges?.includes(n.id)),
  }
}
