import React from 'react'
import { FormCreateUser } from '../form'
import { Card, Typography } from 'antd'
import 'antd/dist/reset.css';


const CreateUserSection = (props) => {
  const { } = props

  return (
    <Card  style={{
      background: 'linear-gradient(180deg,rgba(186, 201, 204, 0.3) 0%, rgba(89, 115, 150, 0.3) 100%), rgba(3, 9, 24, 0.5) ',
      border: '1px solid rgba(96, 96, 96, 0.5)',
    }}
  >
      <Typography.Title level={3} className='!text-[#ffffff] '>ผลการดำเนินงานร้องเรียนร้องทุกข์</Typography.Title>
      <FormCreateUser />
    </Card>
  )
}

export default React.memo(CreateUserSection)
