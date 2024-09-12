import React from 'react'
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintComparisonChart = (props) => {
  const { } = props

  const series = [{
    name: 'กำลังดำเนินการ',
    data: [542, 342]
  },{
    name: 'ยุติ',
    data: [479, 279]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,  
        barHeight: '70%', 
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: true
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['ปี 2567', 'ปี 2566'],
    },
    fill: {
      opacity: 1
    },
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

export default React.memo(ComplaintComparisonChart)