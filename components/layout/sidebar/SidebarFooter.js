import { Button } from 'antd'
import React from 'react'
import { useRouter } from 'next/router';

const SidebarFooter = (props) => {
  const { } = props


  
  const router = useRouter();

  return (
    <div className='text-center'>
      <Button
        type='primary'
        size='large'
        block
        className='prop-color'
        onClick={() => router.push('/api/logout')}
      >
        ออกจากระบบ
      </Button>
    </div>
  )
}

export default React.memo(SidebarFooter)
