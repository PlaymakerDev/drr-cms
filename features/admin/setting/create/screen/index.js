import React from 'react'
import { Row, Col, Typography } from 'antd'
import { UserListSection, CreateUserSection } from '../components/content'
import { FormSearchUser } from '../components/form'

const CreateScreen = (props) => {
  const { } = props

  return (
    <section>
      <Typography.Title level={5} className='!text-[#ffffff]'>จัดการผู้ใช้งาน</Typography.Title>
      <Row gutter={[30, 30]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={24}>
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
  )
}

export default React.memo(CreateScreen)