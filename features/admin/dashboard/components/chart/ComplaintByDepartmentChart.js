import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintByDepartmentChart = (props) => {
  const { } = props

  const series = [{
    name: 'กำลังดำเนินการ',
    data: [95, 101, 150]
  }, {
    name: 'ยุติ',
    data: [95, 101, 150]
  }, {
    name: 'รวม',
    data: [45, 50, 139]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,  
        barHeight: '80%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -10,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['หน่วยงาน A', 'หน่วยงาน B', 'หน่วยงาน C'],
    },
    fill: {
      opacity: 1
    },
    colors: ["#0075E9", "#43BE6D","#F1E14A"]
    
  }

  return (
    <div>
      <Chart
        series={series}
        options={options}
        height={220}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ComplaintByDepartmentChart)
