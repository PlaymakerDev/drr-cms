import React from 'react'
import { Layout } from '@/components/layout'
import OverviewScreen from '@/features/admin/setting/manage-user/overview/screen'

const OverviewPage = (props) => {
  const { } = props

  return (
    <Layout>
      <OverviewScreen />
    </Layout>
  )
}

export default React.memo(OverviewPage)
