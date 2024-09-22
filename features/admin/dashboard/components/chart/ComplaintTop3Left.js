import React from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintTop3Left = (props) => {
  const { data } = props;

  const label = data?.top3?.[0]?.label || "No Data";

  const value = data?.top3?.[0]?.value || 0;

  return (
    <div>
      <Chart
        options={{
          chart: {
            type: "radialBar",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "50%",
              },
              dataLabels: {
                name: {
                  show: false,
                },
                value: {
                  fontSize: "18px",
                  show: true,
                  formatter: function (val) {
                    return `${val}%`;
                  },
                  offsetY: 10,
                },
              },
            },
          },
          labels: [label],
          colors: ["#99DE63"],
        }}
        series={[value]}
        type="radialBar"
        height={200}
      />
    </div>
  );
};

export default ComplaintTop3Left;
