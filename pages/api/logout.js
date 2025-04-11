import { removeTokenCookie } from '@/utils/auth/authCookies'
import config from '@/config'

export default async function logout(
  req,
  res,
) {
  const role = req?.query?.role
  removeTokenCookie(res)

  let location
  switch (role) {
    case 'Admin':
      location = `${config.basePath}/login`
      break;
    case 'Superadmin':
      location = `${config.basePath}/login`
      break;
    default:
      location = `${config.basePath}/login`
  }

  // res.writeHead(302, { Location: location })
  return res.writeHead(302, { Location: location }).end()
}
