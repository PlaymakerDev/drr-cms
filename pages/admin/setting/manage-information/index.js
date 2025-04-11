import React from 'react'
import { Layout } from '@/components/layout'
import ManageInformationScreen from '@/features/admin/setting/manage-information/screen'
import { wrapper } from '@/store'
import { getLoginSession } from '@/utils/auth'
import { redirectToLogin, sessionToProps, validatePermissionRoute } from '@/utils/auth/routePermission'
import { signIn } from '@/store/features/userAuthenSlice'
import { ROLE } from '@/utils/auth/roleConfig'
import AppProvider from '@/components/providers/AppProvider'
const ManageInformationPage = (props) => {
  const { } = props

  return (
    <AppProvider>
      <Layout>
        <ManageInformationScreen />
      </Layout>
    </AppProvider>
  )
}
export const getServerSideProps = wrapper.getServerSideProps(store => (async (context) => {
  const session = await getLoginSession(context.req, context.res)

  const valid = validatePermissionRoute(session, [ROLE.ADMIN])
  if (!valid) {
    return redirectToLogin('/404')
  }

  store.dispatch(signIn(session));

  return sessionToProps(session, session?.message)
}));
export default React.memo(ManageInformationPage)
