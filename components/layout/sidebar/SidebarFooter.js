import { Button } from 'antd'
import React from 'react'

const SidebarFooter = (props) => {
  const { } = props

  return (
    <div className='text-center'>
      <Button
        type='primary'
        size='large'
        block
        className='prop-color'
      >
        ออกจากระบบ
      </Button>
    </div>
  )
}

export default React.memo(SidebarFooter)
