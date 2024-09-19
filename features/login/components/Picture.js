import React from 'react'
import styles from '@/features/login/style/login.module.css'
import Image from 'next/image'

function Picture() {
  return (
    <figure className={`relative w-full h-full ${styles.image}`}>
      <Image
        src='/images/login.png'
        // src='/images/image.svg'
        layout='fill' // Ensures the image fills the parent container
        // objectFit='cover' // Makes the image cover the container while preserving aspect ratio
        alt='login'
        className='block w-full h-full object-fit absolute inset-0' // Ensures the image is positioned correctly
      
      />
    </figure>
  )
}

export default Picture