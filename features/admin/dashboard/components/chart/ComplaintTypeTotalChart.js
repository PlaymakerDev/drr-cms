import React from 'react';
import dynamic from 'next/dynamic';
const ApexCharts = dynamic(() => { return import('react-apexcharts'); }, { ssr: false });

const DonutChart = () => {
  const options = {
    chart: {
      width: 330,
      type: 'donut',
    },
    plotOptions:{
        pie: {
          donut:{
            labels: {
              show: true,
              value: {
                fontSize: '24px',
                fontWeight: 'bold',
                offsetY: 5,
              },
              total: {
                show: true,
                label: 'ทั้งหมด',
                fontSize: '16px',
                fontWeight: 'bold',
                formatter: function (w) {
                  return 312;
                } 
              }
            }
          }
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    colors: ["#F1E14A","#FF8831","#43BE6D","#0075E9","#8E9BA7","#A2CCF4"],
    stroke: {
      width: 0,  // Removes the spacing between the data points
    },
  };

  const series = [10,44,20,20,3,3];

  return (
    <div>
      <ApexCharts
        options={options}
        series={series}
        type="donut"
        width={options.chart.width}
      />
    </div>
  );
};

export default DonutChart;
