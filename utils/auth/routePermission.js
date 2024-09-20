import config from '@/config'

export function validatePermissionRoute(user, roles) {
  let canView = false
  if (user?.token) {
    if (user.token && roles.includes(user.role)) {
      canView = true
    }
  }

  return canView
}

export function redirectToLogin(path = '/login') {
  let destinationPath = config.basePath + path
  return {
    redirect: {
      destination: destinationPath,
      permanent: false,
    },
  }
}

export function sessionToProps(session, message) {
  return {
    props: {
      user: session || null,
      error: {
        message: message || null,
      },
    },
  }
}
