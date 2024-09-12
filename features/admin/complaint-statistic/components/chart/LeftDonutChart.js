import React from 'react';
import Chart from 'react-apexcharts';

const LeftDonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,  // This hides the legend
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    }],
  };

  const series = [44, 55, 41, 17, 15];

  return (
    <div>
      <Chart
        options={options}
        series={series}
        type="donut"
        width="460"
      />
    </div>
  );
};

export default LeftDonutChart;
