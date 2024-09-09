import React from 'react'
import { Card, Flex, Progress, Typography } from 'antd'

const ComplaintProgressStat = (props) => {
  const { } = props

  return (
    <Card>
      <Progress
        showInfo={false}
        percent={100}
        success={{
          percent: 30
        }}
      />
      <Flex
        justify='space-between'
        align='center'
        wrap
      >
        <Typography.Text>กำลังดำเนินการ 286 รายการ</Typography.Text>
        <Typography.Text>ยุติ 15 รายการ</Typography.Text>
      </Flex>
    </Card>
  )
}

export default React.memo(ComplaintProgressStat)
