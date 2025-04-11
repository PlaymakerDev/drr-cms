import axios, { AxiosError } from 'axios'
import { setLoginSession, getUserSession } from '@/utils/auth'
import config from '@/config'
import pm from '@/utils/auth/permission';

const toLoginAgain = async (res, response, locale) => {
  const MAX_AGE = 4
  await setLoginSession(res, response, MAX_AGE)
  let p = config.basePath
  if (locale === 'en') {
    p = p + '/en'
  }
  return res.redirect(302, p + '/login')
}


const url = config.hostBackendServerSide + '/api/v1/user/login'
async function handler(req, res,) {
  const { username, password, role, locale, remember_me, token } = await req.body
  try {
    if (![username, password].every(val => String(val).trim())) {
      return res.status(400).json({ success: false, message: 'Bad request' })
    }

    const rememberMe = remember_me === 'true' ? true : false
    const body = {
      "username": username,
      "password": password,
      "rememberMe": rememberMe
    }
    console.log('bodyparam', body);
    const configHeader = {
      headers: {
        'recaptcha': token
      }
    };
    const { data, status } = await axios.post(url, body, configHeader)

    console.log('data----->>>>>', data);

    if (!data?.success) {
      const response = {
        success: false,
        message: data?.error_message || 'Internal server error',
        username: username,
      }
      return toLoginAgain(res, response, locale)
    }
    console.log('successs login', data);
    const user = getUserSession(data)
    await setLoginSession(res, user, 60 * 60 * 24 * 2)
    let redirectURL = (config.basePath || '')
    if (locale === 'en') {
      redirectURL = redirectURL + '/en'
    }
    const pUser = pm(user)
    redirectURL = redirectURL + pUser.indexPage()
    return res.redirect(302, redirectURL)
  } catch (error) {
    console.log('error----->>>>>', error);
    let response = {
      success: false,
      message: 'Wrong password',
      username: username,
      role,
    }

    if (error instanceof AxiosError) {
      response = {
        ...response,
        ...(error?.response?.data),
      }
    }

    let _redirectURL = config.basePath
    if (locale === 'en') {
      _redirectURL = _redirectURL + '/en'
    }

    response = { ...response }
    return toLoginAgain(res, response, locale)
  }
}

export default handler;
