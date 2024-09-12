import React from 'react'
import { Card, Typography } from 'antd'
import { ComplaintByDepartmentChart } from '../chart'


const ComplaintByDepartment = (props) => {
  const { } = props

  return (
    <Card className='!w-full !h-full'>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0 ">
          TOP3 หน่วยงานที่มีเรื่องร้องเรียนร้องทุกข์มากที่สุด ในวันนี้        
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <ComplaintByDepartmentChart />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintByDepartment)
