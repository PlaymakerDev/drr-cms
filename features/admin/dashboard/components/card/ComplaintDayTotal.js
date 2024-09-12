import React from 'react'
import { Card, Typography } from 'antd'
import { ComplaintDayTotalChart } from '../chart'

const ComplaintDayTotal = (props) => {
  const { } = props

  return (
    <Card className='!w-full !h-full'>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
        จำนวนเรื่องร้องทุกข์ ภายในวันนี้
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <ComplaintDayTotalChart />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintDayTotal)
