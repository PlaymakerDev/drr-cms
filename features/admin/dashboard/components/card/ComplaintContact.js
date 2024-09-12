import React from 'react'
import Image from 'next/image';
import { Card, Typography } from 'antd'
import Hotline from '@/public/images/Hotline.svg'

const ComplaintContact = (props) => {
  const { } = props

  return (
    <Card>
      <div className='flex justify-between items-center'>
        <div className='flex space-x-3'>
          <Image
            src={Hotline}
            alt='hotline'
            width={46}
            height={46}
          />
          <div>
            <Typography.Title level={5} className='font-bold !m-0'>สายด่วน 1146</Typography.Title>
            <Typography.Text>ช่องทางที่ได้รับความนิยมสูงสุด ภายในวันนี้</Typography.Text>
          </div>
        </div>
        <div>
          <Typography.Text className='!text-4xl !font-bold'>88</Typography.Text>
          <Typography.Text className='!text-3xl !text-gray-500'>.79%</Typography.Text>
        </div>
      </div>
    </Card>
  )
}

export default React.memo(ComplaintContact)
