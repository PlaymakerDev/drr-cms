import React from 'react'
import FormLogin from '../components/FormLogin'
import styles from '@/features/login/style/login.module.css'
import Picture from '../components/Picture'
import Image from 'next/image'
import { Typography } from 'antd'

const LoginScreen = () => {
  return (
    <div className={styles.loginScreen}>
      {/* Logo Section */}
      <div className="absolute bottom-10 left-4 md:left-12 z-10 flex items-center gap-3 md:gap-5">
        <Image
          src="/images/dpt-logo.png"
          width={90} /* Smaller for mobile */
          height={90} /* Smaller for mobile */
          className="md:w-32 md:h-32" /* Larger for medium and above */
          alt="Login"
        />

        <div className='flex flex-col'>
          <Typography.Text className='!text-primary-color !font-IBMPlexSansThaiExtraLight text-xs md:text-base'>
            Powered By:
          </Typography.Text>
          <Typography.Text className='!text-primary-color font-bold text-xl md:text-2xl'>
            กรมทางหลวงชนบท
          </Typography.Text>
          <Typography.Text className='!text-primary-color !font-IBMPlexSansThaiExtraLight text-xs md:text-base'>
            DEPARTMENT OF RURAL ROAD
          </Typography.Text>
        </div>
      </div>

      {/* Centered Image */}
      <div className="absolute bottom-20 md:bottom-40 left-1/2 transform -translate-x-1/2 z-5">
        <Image
          src="/images/Group 41849.png"
          width={100} /* Smaller for mobile */
          height={100} /* Smaller for mobile */
          className="md:w-150 md:h-150" /* Larger for medium and above */
          alt="Login"
        />
      </div>

      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 h-screen'>
        {/* Left Column - Picture */}
        <Picture className="hidden md:block" /> {/* Show only on medium screens and above */}

        {/* Right Column - FormLogin */}
        <FormLogin className="block md:hidden w-full px-4 md:px-16 py-12" /> {/* Show only on small screens */}
      </div>
    </div>
  )
}

export default React.memo(LoginScreen)
