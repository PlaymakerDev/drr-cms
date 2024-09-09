import React from 'react'
import { Layout } from '@/components/layout'
import DashboardScreen from '@/features/admin/dashboard/screen'

const DashboardPage = (props) => {
  const { } = props

  return (
    <Layout>
      <DashboardScreen />
    </Layout>
  )
}

export default React.memo(DashboardPage)
