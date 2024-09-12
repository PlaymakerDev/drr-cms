import React from 'react'
import { Card, Typography } from 'antd'
import { ComplaintComparisonChart } from '../chart'

const ComplaintComparison = (props) => {
  const { } = props

  return (
    <Card className='!w-full !h-full'>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          เปรียบเทียบเรื่องร้องเรียน ปี 2566 - 2567        
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <ComplaintComparisonChart />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintComparison)
