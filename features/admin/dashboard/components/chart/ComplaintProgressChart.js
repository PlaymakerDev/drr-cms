import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintProgressChart = (props) => {
  const { } = props

  const series = [{
    name: 'กำลังดำเนินการ',
    data: [95, 101, 150]
  }, {
    name: 'ยุติ',
    data: [45, 50, 139]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '40%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: false,
      offsetX: -10,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['พฤษภาคม 65', 'มิถุนายน 65', 'กรกฏาคม 65'],
    },
    fill: {
      opacity: 1
    },
    colors: ["#0075E9", "#43BE6D"]
  }

  return (
    <div>
      <Chart
        series={series}
        options={options}
        height={180}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ComplaintProgressChart)
