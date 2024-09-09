import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintDayTotal = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={5} className='!m-0'>จำนวนเรื่องร้องทุกข์ ภายในวันนี้</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintDayTotal)
