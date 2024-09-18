import React from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

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
    colors: ["#3FC8E4", "#C4E1FE", "#9BCDFE", "#6DB6FE", "#3098FE", "#0F87FE", "#007DF8", "#0050A0", "#053464", "#264B72", "#24507F"],
    stroke: {
      width: 0,  // Removes the spacing between the data points
    },
  };

  const series = [47, 13, 4, 4, 6, 3, 2, 1, 2, 10, 8];

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
