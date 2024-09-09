import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintType = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={5} className='!m-0'>ประเภทเรื่องร้องเรียนร้องทุกข์ ภายในวันนี้</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintType)
