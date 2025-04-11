import axios from 'axios';
import { setLoginSession, getLoginSession } from '@/utils/auth';
import config from '@/config';
import dayjs from 'dayjs';
import { MAX_AGE } from '@/utils/auth/authCookies';

const url = config.hostBackend + '/api/v1/user/retoken';

async function handler(req, res) {
  const session = await getLoginSession(req);
  try {
    if (!session?.token) {
      res.status(401).end('no token');
      return;
    }

    const token = session.token;
    console.log(`refreshToken------>>>> ${dayjs().format('HH:mm')} token : ${token}`);

    const { data, status } = await axios.get(url, {
      headers: {
        "Authorization": "Bearer " + token
      }
    });

    console.log(`refreshToken------>>>> data : `, data);

    if (!(status >= 200 && status < 400)) {
      res.status(status).json(data);
      return;
    }

    const user = {
      ...session,
      expiringDate: dayjs().add(data?.expiryTime || config.lifeTimeToken, 'minutes'),
      token: data?.token,
      isLoggedIn: true
    };

    await setLoginSession(res, user, MAX_AGE);
    res.status(200).json(user);
  } catch (error) {
    console.log('session----->>>>> error', error);
    res.status(401).json((error?.response?.data) || {});
    res.end();
  }
}

export default handler;
