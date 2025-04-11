import React from 'react'
import LoginScreen from '@/features/login/screen'
import NewLoginScreen from '@/features/new-login/screen'
import { getLoginSession } from '@/utils/auth'
import { redirectToLogin, sessionToProps } from '@/utils/auth/routePermission'
import permission from '@/utils/auth/permission'
import { wrapper } from '@/store'
import { signIn } from '@/store/features/userAuthenSlice'
import { connect } from 'react-redux';

const LoginPage = (props) => {
  return (
    <div>
      <NewLoginScreen error={props.error} username={props.user?.username} user={props.user} />
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(store => (async (context) => {
  const session = await getLoginSession(context.req)
  if (session?.token) {
    const pm = permission(session)
    store.dispatch(signIn(session));
    return redirectToLogin(pm.indexPage())
  }
  return sessionToProps(session, session?.message)
}));

export default connect((state) => state)(LoginPage);
