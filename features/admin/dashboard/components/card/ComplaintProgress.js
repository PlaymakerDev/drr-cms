import React from 'react'
import { Card, Typography, Col, Row, Avatar } from 'antd'
import ComplaintProgressChart from '../chart/ComplaintProgressChart'

const ComplaintProgress = (props) => {
  const { } = props

  return (
    <Card>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          ผลการดำเนินงานร้องเรียนร้องทุกข์
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <Row gutter={[16, 16]} align={'middle'}>
          <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={12}>
            <Typography.Title level={4} className='!m-0'>ผลการตรวจสอบน้ำหนักทั้งหมด</Typography.Title>
            <Typography.Text>ผลการดำเนินการจัดตั้ง 7 วันล่าสุด</Typography.Text>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={12}>
            <section className='flex flex-wrap justify-between'>
              <div className='flex gap-3 items-center'>
                <div className='flex'>
                  <Avatar
                    // icon={<PhTruck />}
                    className='!bg-[#56E4EE]'
                    size={'large'}
                  />
                </div>
                <div className='flex flex-col'>
                  <Typography.Title level={5} className='!m-0'>175 ครั้ง</Typography.Title>
                  <Typography.Text>รถเข้าชั่ง</Typography.Text>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex'>
                  <Avatar
                    // icon={<PhTruck />}
                    className='!bg-[#E81A1A]'
                    size={'large'}
                  />
                </div>
                <div className='flex flex-col'>
                  <Typography.Title level={5} className='!m-0'>175 ครั้ง</Typography.Title>
                  <Typography.Text>รถน้ำหนักเกิน</Typography.Text>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </section>
      <section>
        <ComplaintProgressChart />
      </section>
    </Card>
  )
}

export default React.memo(ComplaintProgress)
