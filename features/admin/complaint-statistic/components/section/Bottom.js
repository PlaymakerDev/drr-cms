import { Col, Row } from 'antd'
import React from 'react'
import { LeftCard, RightCard } from '../'

const Bottom = (props) => { 
  const { } = props

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <LeftCard />
        </section>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <RightCard />
        </section>
      </Col>
    </Row>
  )
}

export default React.memo(Bottom)
