import React from 'react'
import { Layout } from '@/components/layout'
import ReportScreen from "@/features/admin/report/screen";


const ReportPage = (props) => {
  const { } = props

  return (
    <Layout>
      <ReportScreen />
    </Layout>
  )
}

export default React.memo(ReportPage)
