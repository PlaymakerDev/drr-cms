import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintProgress = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={4} className='!m-0'>ผลการดำเนินงานร้องเรียนร้องทุกข์</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintProgress)
