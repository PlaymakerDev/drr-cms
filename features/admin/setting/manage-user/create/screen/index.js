import React from 'react'
import { Row, Col, Typography } from 'antd'
import { UserListSection, CreateUserSection } from '../components/content'
import { FormSearchUser } from '../components/form'

const CreateScreen = (props) => {
  const { } = props

  return (
    <>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>จัดการผู้ใช้งาน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <FormSearchUser />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <UserListSection />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <CreateUserSection />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default React.memo(CreateScreen)
