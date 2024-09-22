import React from 'react'
import Image from 'next/image';
import { Card, Typography, Row, Col } from 'antd'
import Hotline from '@/public/images/Hotline.svg'

const ContentComplaintContact = (props) => {
  const { data } = props

  console.log('=111' , data);

  return (
    <>
      <Row gutter={[16, 16]} className="!w-full !h-full items-center">
        <Col xs={24} sm={16} md={16} lg={17} xl={17} xxl={17}>
        <div className='flex space-x-3'>
          <Image
            src={Hotline}
            alt='hotline'
            width={46}
            height={46}
          />
          <div>
            <Typography.Title level={5} className='font-bold !m-0'>{data[0]?.source_name || 'ไม่มีข้อมูล'}</Typography.Title>
            <Typography.Text>ช่องทางที่ได้รับความนิยมสูงสุด ภายในวันนี้</Typography.Text>
          </div>
        </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={7} xl={7} xxl={7}>
        <div className='md:text-right text-center'>
          <Typography.Text className='!text-3xl !font-bold'>{data[0]?.source_type_percent || '0.00'}%</Typography.Text>
        </div>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(ContentComplaintContact)
