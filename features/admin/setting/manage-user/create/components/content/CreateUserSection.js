import React from 'react'
import { FormCreateUser } from '../form'
import { Card, Typography } from 'antd'

const CreateUserSection = (props) => {
  const { } = props

  return (
    <Card className='!bg-[#BAC9CC20] border-[#60606020]'>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>เพิ่มข้อมูลผู้ใช้งาน</Typography.Title>
      </section>
      <section className='mt-5'>
        <FormCreateUser />
      </section>
    </Card>
  )
}

export default React.memo(CreateUserSection)
