import { useEffect } from 'react'
import { useAppDispatch } from '@/store/hooks'
import * as session from './session'
import { signIn } from '@/store/features/userAuthenSlice'

let interval

async function getSession() {
  return await session.getSession()
}

/**
 * นำเวลาที่ได้ token ล่าสุดมาเทียบกับเวลาปัจจุบัน
 * หากต่างกัน 25 นาทีให้ return true
 */
export function compereDate(createdAt) {
  if (!createdAt) return false
  const a = new Date().getTime() - createdAt
  // return a > 1500000 // 25 * 60 * 1000 (25 นาที)
  return a > 600000 // 10 * 60 * 1000 (10 นาที)
  // return a > 1 * 60 * 1000 // 10 * 60 * 1000 (10 นาที) dev

}

async function refreshToken(createdAt) {
  if (compereDate(createdAt)) {
    const newUser = await session.refresh()
    return newUser
  }

  return null
}

const useRefreshToken = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    getSession().then(async (data) => {
      const newUser = await refreshToken(data?.createdAt)
      if (newUser) {
        dispatch(signIn(newUser))
      }
    })
    if (interval) clearInterval(interval)

    /**
     * ทำการดึง session มา check expire ทุก 4 นาที
     */
    interval = setInterval(() => {
      getSession().then(async (data) => {
        const newUser = await refreshToken(data?.createdAt)
        if (newUser) {
          dispatch(signIn(newUser))
        }
      })
    }, 120000) // 240000 = 1000 * 60 * 2 (2 นาที)
    // }, 1000 * 10 ) // 240000 = 1000 * 60 * 2 (10 วิ) dev

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

export default useRefreshToken
