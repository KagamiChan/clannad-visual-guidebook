import { Node, Edge } from 'react-flow-renderer'

export enum Route {
  Public = 'public',
}

export enum PageId {
  Apr14 = 'apr14',
  Apr15 = 'apr15',
  Apr16 = 'apr16',
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
]
