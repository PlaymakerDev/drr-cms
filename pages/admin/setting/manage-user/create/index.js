import React from 'react'
import { Layout } from '@/components/layout'
import CreateScreen from '@/features/admin/setting/manage-user/create/screen'

const CreatePage = (props) => {
  const { } = props

  return (
    <Layout>
      <CreateScreen />
    </Layout>
  )
}

export default React.memo(CreatePage)
