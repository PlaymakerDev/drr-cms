import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintComparisonChart = (props) => {
  const { data } = props

  const mutableData = JSON.parse(JSON.stringify(data));

  // console.log('tet' , mutableData?.data?.series);
  // const mock_data = [{
  //   name: 'กำลังดำเนินการ',
  //   data: [542, 342]
  // },{
  //   name: 'ยุติ',
  //   data: [479, 279]
  // }]

  return (
    <div>
      <Chart
        series={mutableData?.data?.series}
        options={{
          chart: {
            type: 'bar',
            toolbar: {
              show: false
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,  
              barHeight: '70%', 
              endingShape: 'rounded',
              dataLabels: {
                position: 'top',
              },
              borderRadius: 5,
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -10,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
          },
          xaxis: {
            categories: data?.data?.labels
          },
          fill: {
            opacity: 1
          },
          colors: ["#0075E9", "#43BE6D"]
        }}
        height={220}
        type='bar'
      />
    </div>
  )
}

export default React.memo(ComplaintComparisonChart)
