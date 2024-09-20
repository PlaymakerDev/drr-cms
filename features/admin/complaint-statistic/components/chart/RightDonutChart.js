import React from 'react'
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LeftDonutChart = () => {
  const options = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
      },
    }],
    colors: ["#43BE6D","#D9F2E2","#B4E5C5","#8ED8A7","#69CB8A","#6BD690","#369857","#287241","#287241"],
    stroke: {
      width: 0,  // Removes the spacing between the data points
    },
  };

  const series = [47,13,4,4,6,3,2,1,2];

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
