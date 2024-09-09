import { Card, Typography } from 'antd'
import React from 'react'

const ComplaintCurrent = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={4} className='!m-0'>เรื่องร้องเรียนร้องทุกข์ ภายในวันนี้</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintCurrent)
