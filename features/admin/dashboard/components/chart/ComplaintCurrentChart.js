import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintCurrentChart = (props) => {
  const { data, datacomplain } = props;

  const totaldata = datacomplain;

  const totalComplaints = totaldata.reduce((total, item) => total + item.source_type_count, 0);

  const seriesData = data.graph.series.map((value) => (value / totalComplaints) * 100);

  return (
    <>
      <Chart
        options={{
          chart: {
            type: "radialBar",
            toolbar: {
              show: false,
            },
            fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
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
                  offsetY: 3,
                  formatter: function (data) {
                    return `${Math.round((data * totalComplaints) / 100)} รายการ`;
                  },
                },
                total: {
                  fontSize: "18px",
                  show: true,
                  showAlways: true,
                  label: "ทั้งหมด",
                  formatter: function () {
                    return totalComplaints;
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
          colors: ["#6093FF", "#FCAA72", "#99DE63"],
          tooltip: {
            enabled: true,
            y: {
              formatter: function (data) {
                return `${Math.round((data * totalComplaints) / 100)} รายการ`;
              },
            },
            x: {
              show: true,
            },
          },
        }}
        series={seriesData}
        type="radialBar"
        height={230}
      />
    </>
  );
};

export default React.memo(ComplaintCurrentChart);
