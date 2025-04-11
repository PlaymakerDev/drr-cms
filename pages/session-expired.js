import React from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/store/hooks'
import { Modal } from 'antd'
import config from '@/config'
import useEffectOne from '@/utils/hooks/useEffectOne'

const SessionExpired = () => {
  const { replace } = useRouter()
  const [modal, contextHolder] = Modal.useModal();
  const dispatch = useAppDispatch()

  useEffectOne(() => {
    modal.warning({
      title: <h3 className='txt-bold m-0'>{'แจ้งเตือน'}</h3>,
      content: 'เซสชั่นหมดอายุ',
      onOk: () => {
        // dispatch(signOut(null))
        localStorage.clear();
        replace(`/${config.basePath}/api/logout`)
      },
      okText: 'ok'
    })
  }, [])

  return (
    <div>
      {contextHolder}
    </div>
  )
}

export default SessionExpired
