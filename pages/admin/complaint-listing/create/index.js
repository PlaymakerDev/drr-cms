import React from 'react'
import { Layout } from '@/components/layout'
// import { ComplaintForm } from '@/features/admin/complaint-listing/overview/components'
import CreateScreen from '@/features/admin/complaint-listing/create/screen'


const CreatePage = (props) => {
  const { } = props

  return (
    <Layout>
      <CreateScreen />
    </Layout>
  )
}

export default React.memo(CreatePage)
