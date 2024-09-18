import { Col, Row } from 'antd'
import React from 'react'
import { TotalComplaint } from '../'

const Top = (props) => { 
  const { } = props

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
        <section>
          <TotalComplaint />
        </section>
      </Col>
    </Row>
  )
}

export default React.memo(Top)
