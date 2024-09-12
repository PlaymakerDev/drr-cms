import React from 'react';
import ApexCharts from 'react-apexcharts';

const DonutChart = () => {
  const options = {
    chart: {
      width: 330,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
  };

  const series = [44, 55, 13];

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
