import React from 'react'
import { Card, Typography,Col, Row,Avatar } from 'antd'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintProgress = (props) => {
  const { } = props

  const series = [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }]

  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
        endingShape: 'rounded'
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
      title: {
        text: '$ (thousands)'
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    }
  }

  return (
    <Card>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          ผลการดำเนินงานร้องเรียนร้องทุกข์        
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section>
        <Row gutter={[16, 16]} align={'middle'}>
          <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={12}>
            <Typography.Title level={4} className='!m-0'>ผลการตรวจสอบน้ำหนักทั้งหมด</Typography.Title>
            <Typography.Text>ผลการดำเนินการจัดตั้ง 7 วันล่าสุด</Typography.Text>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={12}>
            <section className='flex flex-wrap justify-between'>
              <div className='flex gap-3 items-center'>
                <div className='flex'>
                  <Avatar
                    // icon={<PhTruck />}
                    className='!bg-[#56E4EE]'
                    size={'large'}
                    />
                </div>
                <div className='flex flex-col'>
                  <Typography.Title level={5} className='!m-0'>175 ครั้ง</Typography.Title>
                  <Typography.Text>รถเข้าชั่ง</Typography.Text>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='flex'>
                  <Avatar
                    // icon={<PhTruck />}
                    className='!bg-[#E81A1A]'
                    size={'large'}
                  />
                </div>
                <div className='flex flex-col'>
                  <Typography.Title level={5} className='!m-0'>175 ครั้ง</Typography.Title>
                  <Typography.Text>รถน้ำหนักเกิน</Typography.Text>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </section>
      {/* <Chart
        series={series}
        options={options}
        type='bar'
      /> */}
    </Card>
  )
}

export default React.memo(ComplaintProgress)
