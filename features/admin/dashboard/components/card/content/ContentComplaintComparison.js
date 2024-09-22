import React from 'react'
import { Card, Typography } from 'antd'
import { ComplaintComparisonChart } from '../../chart'

const ContentComplaintComparison = (props) => {
  const { data } = props

  return (
    <>
      <section className="flex items-center">
        <Typography.Title level={5} className="!m-0">
          เปรียบเทียบเรื่องร้องเรียน ปี 2566 - 2567        
        </Typography.Title>
      </section>
      <section>
        <ComplaintComparisonChart data={data} />
      </section>
    </>
  )
}

export default React.memo(ContentComplaintComparison)