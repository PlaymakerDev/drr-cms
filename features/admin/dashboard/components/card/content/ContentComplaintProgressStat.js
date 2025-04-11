import React from 'react'
import { Flex, Progress, Typography } from 'antd'

const ContentComplaintProgressStat = (props) => {
  const { data } = props

  // const approve = 100
  // const inProgress = 100
  // const end = 0
  const approve = data[0]?.status_count
  const inProgress = data[1]?.status_count
  const end = data[2]?.status_count

  const inProgressAndApprove = inProgress+approve
  const allTotal = inProgress + end + approve

  const inProgressPercent = (100/allTotal) * inProgressAndApprove
  const approvePercent = (100/allTotal) * approve

  // const total = data[0]?.status_count + data[1]?.status_count
  // const perscentTotal = (100/total) * data[0]?.status_count
  return (
    <>
    {allTotal === 0 ? (
      <Progress
        showInfo={false}
        percent={inProgressPercent}
        success={{
          percent: 100,
          strokeColor: "#d9d9d9",
        }}
        strokeWidth={15}
        trailColor="##d9d9d9" 
      />
    ) : (
      <Progress
        showInfo={false}
        percent={inProgressPercent}
        success={{
          percent: approvePercent,
          strokeColor: "#F1E14A",
        }}
        strokeWidth={15}
        trailColor="#43BE6D" 
        // strokeColor="#43BE6D"
      />
    )}
      <Flex
        justify='space-between'
        align='center'
        wrap
      >
        <Typography.Text>🟡 รับเรื่อง {approve} รายการ</Typography.Text>
        <Typography.Text>🔵 ดำเนินการ {inProgress} รายการ</Typography.Text>
        <Typography.Text>🟢 ยุติ {end} รายการ</Typography.Text>
        {/* <Typography.Text>🔵 กำลังดำเนินการ {data[0]?.status_count} รายการ</Typography.Text>
        <Typography.Text>🟢 ยุติ {data[1]?.status_count} รายการ</Typography.Text> */}
      </Flex>
    </>
  )
}

export default React.memo(ContentComplaintProgressStat)
