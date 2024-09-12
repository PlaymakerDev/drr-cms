import React from 'react'
import { Layout } from '@/components/layout'
import ComplaintStatisticScreen from '@/features/admin/complaint-statistic/screen'

const ComplaintStatisticPage = (props) => {
  const { } = props

  return (
    <Layout>
      <ComplaintStatisticScreen />
    </Layout>
  )
}

export default React.memo(ComplaintStatisticPage)
