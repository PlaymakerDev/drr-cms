import React from 'react'
import { Card, Typography } from 'antd'
import { ComplaintProgressChart } from '../chart'

const ComplaintProgress = (props) => {
  const { } = props

  return (
    <Card className='!w-full !h-full'>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          ผลการดำเนินงานร้องเรียนร้องทุกข์
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <ComplaintProgressChart />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintProgress)
