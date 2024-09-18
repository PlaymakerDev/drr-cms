import React from 'react'
import styles from '@/features/login/style/login.module.css'
import Image from 'next/image'

function Picture() {
  return (
    <pictureContain >

      <Image
        src='/images/login.png'
        width={900}
        height={900}
        alt='login'

      />
    </pictureContain>
  )
}

export default Picture