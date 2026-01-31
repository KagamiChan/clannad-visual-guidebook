import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

import { FlowChart } from '../components/charting/flow-chart'
import { buildPageToDayKeyMap, getDayIndex, loadDayGraph } from '../load-generated-data'
import { dayGraphToReactFlow } from '../generated/to-reactflow'
import type { GeneratedNodeData } from '../generated/to-reactflow'

export function DayRoute() {
  const { dayKey } = useParams<{ dayKey: string }>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [config, setConfig] = useState<{ nodes: any[]; edges: any[] } | null>(null)
  const [error, setError] = useState<string | null>(null)

  const index = useMemo(() => getDayIndex(), [])
  const pageToDayKey = useMemo(() => buildPageToDayKeyMap(index), [index])

  useEffect(() => {
    let cancelled = false
    const run = async () => {
      if (!dayKey) return
      try {
        setError(null)
        const day = await loadDayGraph(dayKey)
        const { nodes, edges } = dayGraphToReactFlow(day)
        if (!cancelled) setConfig({ nodes, edges })
      } catch (e: any) {
        if (!cancelled) setError(e?.message ?? String(e))
      }
    }
    run()
    return () => {
      cancelled = true
    }
  }, [dayKey])

  const onNodeClick = (_: any, node: any) => {
    const data = node.data as GeneratedNodeData | undefined
    const jump = data?.jumps?.find((j) => j.kind === 'gotopage')
    if (!jump || jump.kind !== 'gotopage') return

    const targetDayKey = pageToDayKey.get(jump.toPage)
    if (!targetDayKey) {
      console.warn('Unmapped toPage:', jump.toPage)
      return
    }

    const anchor = jump.toAnchor
    const url = anchor
      ? `/day/${targetDayKey}?anchor=${encodeURIComponent(anchor)}`
      : `/day/${targetDayKey}`
    navigate(url)
  }

  const anchor = searchParams.get('anchor')

  if (!dayKey) return <div>Missing dayKey</div>
  if (error) return <div style={{ padding: 16 }}>Error: {error}</div>
  if (!config) return <div style={{ padding: 16 }}>Loading day {dayKey}...</div>

  // TODO: highlight anchor target (Milestone 3)
  if (anchor) {
    // no-op MVP
  }

  return <FlowChart nodes={config.nodes} edges={config.edges} onNodeClick={onNodeClick} />
}
