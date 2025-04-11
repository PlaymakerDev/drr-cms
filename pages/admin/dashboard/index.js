import React from 'react'
import { Layout } from '@/components/layout'
import DashboardScreen from '@/features/admin/dashboard/screen'
import { wrapper } from '@/store'
import { getLoginSession } from '@/utils/auth'
import { redirectToLogin, sessionToProps, validatePermissionRoute } from '@/utils/auth/routePermission'
import { signIn } from '@/store/features/userAuthenSlice'
import { ROLE } from '@/utils/auth/roleConfig'
import AppProvider from '@/components/providers/AppProvider'

const DashboardPage = (props) => {
  const { } = props

  return (
    <AppProvider>
      <Layout>
        <DashboardScreen />
      </Layout>
    </AppProvider>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => (async (context) => {
  const session = await getLoginSession(context.req, context.res)

  const valid = validatePermissionRoute(session, [ROLE.ADMIN, ROLE.STAFF])
  if (!valid) {
    return redirectToLogin('/404')
  }

  store.dispatch(signIn(session));

  return sessionToProps(session, session?.message)
}));


export default React.memo(DashboardPage)
