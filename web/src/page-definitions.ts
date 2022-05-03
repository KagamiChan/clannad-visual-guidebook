import _ from 'lodash'
import { Node, Edge } from 'react-flow-renderer'

export enum Route {
  Public = 'public',
}

export enum PageId {
  Apr14 = 'apr14',
  Apr15 = 'apr15',
  Apr16 = 'apr16',
  Apr17 = 'apr17',
}

export interface PageDefinition {
  id: PageId
  name: string
  route: Route
  sources: string[]
  excluded?: {
    nodes?: string[]
    edges?: string[]
  }
  additions?: {
    nodes?: Node[]
    edges?: Edge[]
  }
}

const createAdditionLink = (source: string, target: string): Edge => ({
  id: `${source}-${target}`,
  source,
  target,
  type: 'straight',
})

const createSharedEndLinks = (sources: string[], target: string): Edge[] =>
  _.map(sources, (source) => createAdditionLink(source, target))

const createSharedStartLinks = (source: string, targets: string[]): Edge[] =>
  _.map(targets, (target) => createAdditionLink(source, target))

export const pageDefinitions: PageDefinition[] = [
  {
    id: PageId.Apr14,
    name: '4月14日',
    route: Route.Public,
    sources: ['1'],
    excluded: {
      nodes: [
        'p1divTxtBtn1',
        'p1divBtn7',
        'p1divTxtBtn8',
        'p1divBtn15',
        'p1divTxtBtn16',
        'p1divBtn20',
        'p1divTxtBtn21',
        'p1divBtn25',
        'p1divTxtBtn26',
        'p1divBtn29',
        'p1divBtn30',
        'p1divBtn32',
        'p1divBtn34',
        'p1divBtn35',
        'p1divHd36',
      ],
    },
  },
  {
    id: PageId.Apr15,
    name: '4月15日',
    route: Route.Public,
    sources: ['2'],
  },
  {
    id: PageId.Apr16,
    name: '4月16日',
    route: Route.Public,
    sources: ['3', '4'],
    additions: {
      edges: [
        createAdditionLink('p3divTxtBtn184', 'p4divTxtBtn1'),
        createAdditionLink('p3divTxtBtn201', 'p4divTxtBtn1'),
        createAdditionLink('p3divTxtBtn214', 'p4divTxtBtn1'),
        createAdditionLink('p3divTxtBtn220', 'p4divTxtBtn1'),
        createAdditionLink('p4divTxtBtn1', 'p4divTxtBtn5'),
        createAdditionLink('p4divTxtBtn1', 'p4divTxtBtn10'),
        createAdditionLink('p4divTxtBtn10', 'p4divBtn102'),
        createAdditionLink('p4divTxtBtn64', 'p4divBtn102'),
        createAdditionLink('p4divTxtBtn46', 'p4divBtn102'),
        createAdditionLink('p4divTxtBtn90', 'p4divBtn102'),
        createAdditionLink('p4divTxtBtn96', 'p4divBtn102'),
      ],
    },
  },
  {
    id: PageId.Apr17,
    name: '4月17日',
    route: Route.Public,
    sources: ['5', '6'],
    excluded: {
      nodes: ['p6divTxtBtn22', 'p6divTxtBtn42', 'p6divTxtBtn92', 'p6divTxtBtn172'],
    },
    additions: {
      edges: [
        ...createSharedEndLinks(
          [
            'p5divTxtBtn109',
            'p5divTxtBtn126',
            'p5divTxtBtn141',
            'p5divTxtBtn156',
            'p5divTxtBtn167',
            'p5divTxtBtn171',
          ],
          'p6divTxtBtn1',
        ),
        ...createSharedStartLinks('p6divTxtBtn1', ['p6divTxtBtn5', 'p6divTxtBtn7']),
        createAdditionLink('p6divTxtBtn7', 'p6divTxtBtn174'),
        ...createSharedEndLinks(
          ['p6divTxtBtn181', 'p6divTxtBtn187', 'p6divTxtBtn213', 'p6divTxtBtn219'],
          'p6divTxtBtn54',
        ),
        ...createSharedEndLinks(
          ['p6divTxtBtn26', 'p6divTxtBtn32', 'p6divTxtBtn36'],
          'p6divTxtBtn94',
        ),
        ...createSharedEndLinks(
          [
            'p6divTxtBtn60',
            'p6divTxtBtn67',
            'p6divTxtBtn108',
            'p6divTxtBtn126',
            'p6divTxtBtn137',
            'p6divTxtBtn144',
          ],
          'p6divTxtBtn74',
        ),
      ],
    },
  },
]
