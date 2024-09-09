import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintComparison = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={5} className='!m-0'>เปรียบเทียบเรื่องร้องเรียน ปี 2566 - 2567</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintComparison)
