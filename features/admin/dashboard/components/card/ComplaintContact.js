import React from 'react'
import { Card, Typography } from 'antd'

const ComplaintContact = (props) => {
  const { } = props

  return (
    <Card>
      <div className='flex justify-between items-center'>
        <div>
          <Typography.Title level={5} className='!m-0 !font-bold'>สายด่วน 1146</Typography.Title>
          <Typography.Text>ช่องทางที่ได้รับความนิยมสูงสุด ภายในวันนี้</Typography.Text>
        </div>
        <Typography.Text className='!text-xl'>88.79%</Typography.Text>
      </div>
    </Card>
  )
}

export default React.memo(ComplaintContact)
