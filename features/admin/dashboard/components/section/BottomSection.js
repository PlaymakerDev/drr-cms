import React from 'react'
import { Col, Row } from 'antd'
import { BottomLeftSection } from '../section'
import { ComplaintComparison, ComplaintLatest } from '../card'

const BottomSection = (props) => {
  const { } = props

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={16}>
        <BottomLeftSection />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
        <section>
          <ComplaintComparison />
        </section>
        <section className='mt-5'>
          <ComplaintLatest />
        </section>
      </Col>
    </Row>
  )
}

export default React.memo(BottomSection)
