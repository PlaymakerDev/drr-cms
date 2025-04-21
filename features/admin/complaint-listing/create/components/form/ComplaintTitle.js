import React from 'react'
import { Col, message, Row, Typography } from 'antd'
import { Field } from '@/components/form'
import { FileOutlined, FileTextOutlined } from '@ant-design/icons'

const ComplaintTitle = (props) => {
  const { values, errors, handlerChange } = props


  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>หัวข้อเรื่องร้องเรียน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">ส่วนราชการ</Typography.Text>}
              name='topic_header'
              placeholder='ส่วนราชการ'
            />
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default React.memo(ComplaintTitle)
