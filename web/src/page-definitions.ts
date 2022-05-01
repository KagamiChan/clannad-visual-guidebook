export enum Route {
  Public = 'public',
}

export enum PageId {
  Apr14 = 'apr14',
  Apr15 = 'apr15',
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
}

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
]
