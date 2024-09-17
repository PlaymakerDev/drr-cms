import React from 'react'
import { Col, Row, Typography } from 'antd'
import { Field } from '@/components/form'

const ComplainantInformation = (props) => {
  const { values, errors } = props

  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>รายละเอียดผู้ร้องเรียน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">แหล่งที่มาข้อมูล</Typography.Text>}
              name='info_source'
              placeholder='แหล่งที่มาข้อมูล'
              className='!text-primary-color'
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.DatePicker
              label={<Typography.Text className="!text-primary-color">รับเรื่องวันที่</Typography.Text>}
              name='accept_date'
              placeholder='รับเรื่องวันที่'
            />
          </Col>
        </Row>
        <section className='mt-5'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Field.Checkbox
                name='annonymous'
                optKeys={['value', 'label']}
                options={[
                  {
                    label: 'ไม่ระบุตัวตน',
                    value: true
                  }
                ]}
                className='!text-white'
              />
            </Col>
          </Row>
        </section>
        <section className='mt-5'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">ชื่อ</Typography.Text>}
                name='first_name'
                placeholder='ชื่อ'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">นามสกุล</Typography.Text>}
                name='last_name'
                placeholder='นามสกุล'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">เบอร์โทรศัพท์ (ผู้ร้องเรียน)</Typography.Text>}
                name='phone_number'
                placeholder='เบอร์โทรศัพท์ (ผู้ร้องเรียน)'
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">ข้อมูลผู้ติดต่อเพิ่มเติม</Typography.Text>}
                name='additional_info'
                placeholder='ข้อมูลผู้ติดต่อเพิ่มเติม'
              />
            </Col>
          </Row>
        </section>
      </section>
    </div>
  )
}

export default React.memo(ComplainantInformation)
