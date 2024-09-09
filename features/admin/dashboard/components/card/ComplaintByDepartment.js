import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintByDepartment = (props) => {
  const { } = props

  return (
    <Card>
      <Typography.Title level={5} className='!m-0'>TOP3 หน่วยงานที่มีเรื่องร้องเรียนร้องทุกข์มากที่สุด ในวันนี้</Typography.Title>
    </Card>
  )
}

export default React.memo(ComplaintByDepartment)
