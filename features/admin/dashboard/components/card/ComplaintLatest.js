import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintLatest = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={5} className='!m-0'>เรื่องร้องเรียนล่าสุด ภายในวันนี้</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintLatest)
