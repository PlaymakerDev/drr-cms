import React from 'react'
import { Layout } from '@/components/layout'
import ManageInformationScreen from '@/features/admin/setting/manage-information/screen'

const ManageInformationPage = (props) => {
  const { } = props

  return (
    <Layout>
      <ManageInformationScreen />
    </Layout>
  )
}

export default React.memo(ManageInformationPage)
