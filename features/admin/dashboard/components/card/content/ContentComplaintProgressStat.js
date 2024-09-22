import React from 'react'
import { Card, Flex, Progress, Typography } from 'antd'

const ContentComplaintProgressStat = (props) => {
  const { data } = props
  console.log('===prostat' , data);

  return (
    <>
      <Progress
        showInfo={false}
        percent={100}
        success={{
          percent: 4,  // สัดส่วนของ progress bar ทางซ้าย
          strokeColor: "#0075E9",  // สีน้ำเงิน (ด้านซ้าย)
        }}
        strokeWidth={15}
        strokeColor="#43BE6D"  // สีเขียว (ด้านขวา)
      />
      <Flex
        justify='space-between'
        align='center'
        wrap
      >
        <Typography.Text>🔵 กำลังดำเนินการ {data[0]?.status_count} รายการ</Typography.Text>
        <Typography.Text>🟢 ยุติ {data[1]?.status_count} รายการ</Typography.Text>
      </Flex>
    </>
  )
}

export default React.memo(ContentComplaintProgressStat)
