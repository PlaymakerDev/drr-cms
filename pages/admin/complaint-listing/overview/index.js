import React from 'react'
import { Layout } from '@/components/layout'
import OverviewScreen from '@/features/admin/complaint-listing/overview/screen'

const OverviewPage = (props) => {
  const { } = props

  return (
    <Layout>
      <OverviewScreen />
    </Layout>
  )
}

export default React.memo(OverviewPage)
