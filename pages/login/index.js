import React from 'react'
import LoginScreen from '@/features/login/screen'
import Picture from '@/features/login/components/Picture'

const LoginPage = () => {
  return (
    <div>
    <LoginScreen />
    </div>
  )
}

export default React.memo(LoginPage)
