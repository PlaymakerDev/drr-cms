import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintTop3Mid = () => {
  const options = {
    series: [25],
    chart: {
      type: "radialBar",
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '50%',
        },
        dataLabels: {
          name: {
            show: false, 
          },
          value: {
            fontSize: "20px",
            show: true,
            formatter: function (val) {
              return `${val}%`;
            },
            offsetY: 10,
          },
        },
      },
    },
    labels: ["Something"],
    colors: ["#F1E14A"]
  };

  return (
    <div>
      <Chart
        options={options}
        series={options.series}
        type="radialBar"
        height={200}
      />
    </div>
  );
};

export default ComplaintTop3Mid;
