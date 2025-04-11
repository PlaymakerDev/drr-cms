import React from 'react'
import { Typography } from 'antd'
import LoginImg from '@/public/images/login-banner.jpg'
import DPTLogo from '@/public/images/dpt-logo.svg'
import Image from 'next/image'
import FormLogin from '../components/FormLogin'
import config from '@/config'

const NewLoginScreen = (props) => {
  const { error, username, user } = props

  return (
    <main className='h-screen bg-white'>
      <div className='grid grid-cols-1 lg:grid-cols-2 h-full'>
        <figure className='relative overflow-hidden rounded-br-[8rem] hidden lg:block z-10'>
          <Image
            src={LoginImg}
            alt='login-banner'
            className='w-full h-full object-center object-cover brightness-75'
          />
        </figure>
        <div className='absolute bottom-10 left-10 hidden lg:flex items-center gap-5 z-20'>
          <Image
            src={DPTLogo}
            alt="dpt-logo"
            className='z-10'
          />
          <div className='flex flex-col'>
            <Typography.Text className='!text-primary-color !font-IBMPlexSansThaiExtraLight'>Powered By:</Typography.Text>
            <Typography.Text className='!text-primary-color !font-IBMPlexSansThaiSemiBold !text-2xl'>กรมทางหลวงชนบท</Typography.Text>
            <Typography.Text className='!text-[#FFFFFF80] !font-IBMPlexSansThaiExtraLight'>DEPARTMENT OF RURAL ROAD</Typography.Text>
          </div>
        </div>
        <div className='relative h-full w-full'>
          <FormLogin
            initUsername={user?.username}
            actionURL={`${config.basePath}/api/login`}
            error={error}
          />
        </div>
      </div>
    </main>
  )
}

export default React.memo(NewLoginScreen)
