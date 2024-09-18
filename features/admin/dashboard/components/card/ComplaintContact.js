import React from 'react'
import Image from 'next/image';
import { Card, Typography, Row, Col } from 'antd'
import Hotline from '@/public/images/Hotline.svg'

const ComplaintContact = (props) => {
  const { } = props

  return (
    <Card>
      <Row gutter={[16, 16]} className="!w-full !h-full items-center">
        <Col xs={24} sm={16} md={16} lg={16} xl={16} xxl={16}>
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
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
        <div className='md:text-right text-center'>
          <Typography.Text className='!text-4xl !font-bold'>88</Typography.Text>
          <Typography.Text className='!text-3xl !text-gray-500'>.79%</Typography.Text>
        </div>
        </Col>
      </Row>
    </Card>
  )
}

export default React.memo(ComplaintContact)
