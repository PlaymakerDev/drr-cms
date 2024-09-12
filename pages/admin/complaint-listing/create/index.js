import React from 'react'
import { Layout } from '@/components/layout'
import { ComplaintForm } from '@/features/admin/complaint-listing/overview/components'


const CreatePage = (props) => {
  const { } = props

  return (
    <Layout><ComplaintForm /></Layout>
  )
}

export default React.memo(CreatePage)
