import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintDayTotalChart = (props) => {
  const { data } = props

  console.log('test', data.series);

  const mock_data = [{
    name : 'จำนวน',
    data: data.series
  }]
  
  return (
    <div>
      <Chart
        series={mock_data}
        options={{
          chart: {
            type: 'bar',
            toolbar: {
              show: false
            },
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
            categories: ['#','#','#','#','#','#','#','#','#','#','#'],
          },
          fill: {
            opacity: 1
          },
            legend: {
          show: false
        },
        colors: ["#0075E9"]
        }
      }
        height={130}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ComplaintDayTotalChart)
