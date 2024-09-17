import React from 'react'
import { MainContent } from '../components/content'
import { Typography } from 'antd'

const CreateScreen = (props) => {
  const { } = props

  return (
    <div>
      <section>
        <div className='flex flex-wrap justify-between items-center gap-5'>
          <Typography.Title level={5} className='!m-0 !text-primary-color'>แบบรับเรื่องร้องเรียน</Typography.Title>
          <div className='flex flex-col lg:items-end lg:justify-end'>
            <Typography.Text className='!text-primary-color !text-sm'>ผู้บันทึกข้อมูล</Typography.Text>
            <Typography.Text className='!text-primary-color !text-base' strong>พนักงานทั่วไป 67001 แสนดี มั่นคง</Typography.Text>
          </div>
        </div>
      </section>
      <section className='mt-5'>
        <MainContent />
      </section>
    </div>
  )
}

export default React.memo(CreateScreen)
