import { Col, Row } from 'antd'
import React from 'react'
import { LeftCard, RightCard } from '../'

const Bottom = (props) => { 
  const { complaindata , servicedata ,apiGetServiceProgress ,apiGetDeComplaint } = props
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <LeftCard 
            complaindata = {complaindata}
            servicedata = {servicedata}
          />
        </section>
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={12}>
        <section>
          <RightCard
          apiGetServiceProgress={apiGetServiceProgress}
          apiGetDeComplaint={apiGetDeComplaint} />
        </section>
      </Col>
    </Row>
  )
}

export default React.memo(Bottom)
