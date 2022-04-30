import { useMemo } from 'react'
import { useNodes } from 'react-flow-renderer'
import { useSetAtom } from 'jotai'
import _ from 'lodash'

import { nodeDimensionsAtom } from '../../states'
import useDeepCompareEffect, { useDeepCompareMemoize } from 'use-deep-compare-effect'

export const ChartObserver = () => {
  const nodes = useNodes()

  const setNodeDimensions = useSetAtom(nodeDimensionsAtom)

  const nodeDimensions = useMemo(
    () =>
      _.mapValues(_.keyBy(nodes, 'id'), (node) => ({
        width: node.width,
        height: node.height,
      })),
    useDeepCompareMemoize([nodes]),
  )

  useDeepCompareEffect(() => {
    setNodeDimensions(nodeDimensions)
  }, [nodeDimensions])

  return null
}
