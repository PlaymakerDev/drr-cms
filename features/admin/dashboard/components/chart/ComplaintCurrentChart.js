import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintCurrentChart = (props) => {
  const { data } = props;
  console.log("current", data);

  return (
    <>
      <Chart
        options={{
          chart: {
            type: "radialBar",
            toolbar: {
              show: false,
            },
          },
          noData: {
            text: "ไม่มีข้อมูล",
            align: "center",
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                value: {
                  fontSize: "16px",
                  fontWeight: "bold",
                  offsetY: 0,
                  formatter: function (val) {
                    return `${val} รายการ`;
                  },
                },
                total: {
                  fontSize: "12px",
                  show: true,
                  label: "ทั้งหมด",
                  formatter: function () {
                    return data.graph.series.reduce((a, b) => a + b, 0);
                  },
                },
              },
              hollow: {
                size: "30%",
                background: "transparent",
              },
              track: {
                background: "#e0e0e0",
                strokeWidth: "100%",
              },
              stroke: {
                lineCap: "round",
              },
            },
          },
          labels: data.graph.labels || [],
          colors: ["#99DE63", "#FCAA72", "#6093FF"],
          tooltip: {
            enabled: true,
            y: {
              formatter: function (val) {
                return `${val} รายการ`; 
              },
            },
            x: {
              show: true,
            },
          },
        }}
        series={data.graph.series || []}
        type="radialBar"
        height={200}
      />
    </>
  );
};

export default React.memo(ComplaintCurrentChart);
