import React from 'react'
import { Card, Typography } from 'antd'
import { NotifyCard } from '../notify-card'

const ComplaintLatest = (props) => {
  const { } = props

  return (
    <Card>
      <section className='flex justify-between items-center'>
        <Typography.Title level={5} className='!m-0'>เรื่องร้องเรียนล่าสุด ภายในวันนี้</Typography.Title>
        <Typography.Text underline className='!cursor-pointer'>แสดงทั้งหมด</Typography.Text>
      </section>
      <section>
        <NotifyCard />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintLatest)
