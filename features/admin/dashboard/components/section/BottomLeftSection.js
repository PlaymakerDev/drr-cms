import { Col, Row } from 'antd'
import React from 'react'
import { ComplaintByDepartment, ComplaintContact, ComplaintDayTotal, ComplaintProgressStat, ComplaintType } from '../card'

const BottomLeftSection = (props) => {
  const { } = props

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <ComplaintContact />
        </section>
        <section className='mt-5'>
          <ComplaintDayTotal />
        </section>
        <section className='mt-5'>
          <ComplaintByDepartment />
        </section>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <ComplaintProgressStat />
        </section>
        <section className='mt-5'>
          <ComplaintType />
        </section>
      </Col>
    </Row>
  )
}

export default React.memo(BottomLeftSection)
