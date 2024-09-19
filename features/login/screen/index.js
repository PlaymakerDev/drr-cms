import React from 'react'
import FormLogin from '../components/FormLogin'
import styles from '@/features/login/style/login.module.css'
import Picture from '../components/Picture'
import { Container } from 'postcss'

const LoginScreen = () => {

  return (
    <div className={styles.loginScreen}>
      <div className='grid grid-cols-2 h-screen'>
        <Picture />
        
          <FormLogin />
        
        
      </div>
    </div>
  )
}

// export default React.memo(LoginScreen)
export default (LoginScreen)
