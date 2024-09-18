import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintDayTotalChart = (props) => {
  const { } = props

  const series = [{
    name: 'แท่ง',
    data: [105, 65, 60, 63, 42, 185, 38, 42]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
        borderRadius: 3,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['#','#','#','#','#','#','#','#'],
    },
    fill: {
      opacity: 1
    },
      legend: {
    show: false
  },
  colors: ["#0075E9"]
  }

  
  return (
    <div>
      <Chart
        series={series}
        options={options}
        height={130}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ComplaintDayTotalChart)
