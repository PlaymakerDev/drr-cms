import React from 'react'
import { ComplaintCurrent, ComplaintProgress } from '../card'
import { Col, Row } from 'antd'

const TopSection = (props) => {
  const { } = props

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
        <ComplaintCurrent />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={12}>
        <ComplaintProgress />
      </Col>
    </Row>
  )
}

export default React.memo(TopSection)
