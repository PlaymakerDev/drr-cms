import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintTop3Left = () => {
  const options = {
    series: [50],
    chart: {
      type: "radialBar",
      toolbar: {
        show: false
      },
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
    colors: ["#99DE63"]
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

export default ComplaintTop3Left;
