import React from "react";
import dynamic from "next/dynamic";
const Charts = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);

const DonutChart = (props) => {
  const { data } = props;

  const seriesData = data?.series?.length ? data.series : [];
  const labelsData = data?.labels?.length ? data.labels : [];

  return (
    <div>
      <Charts
        options={{
          chart: {
            width: 330,
            type: "donut",
            toolbar: {
              show: false,
            },
          },
          noData: {
            text: "ไม่มีข้อมูล",
            align: "center",
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  value: {
                    fontSize: "24px",
                    fontWeight: "bold",
                    offsetY: 5,
                    formatter: function (val) {
                      return `${val} รายการ`;
                    },
                  },
                  total: {
                    show: true,
                    label: "ทั้งหมด",
                    fontSize: "16px",
                    fontWeight: "bold",
                    formatter: function () {
                      return seriesData.length
                        ? seriesData.reduce((a, b) => a + b, 0)
                        : 0;
                    },
                  },
                },
              },
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          colors: [
            "#F1E14A",
            "#FF8831",
            "#43BE6D",
            "#0075E9",
            "#8E9BA7",
            "#A2CCF4",
          ],
          stroke: {
            width: 0,
          },
          labels: labelsData,
          tooltip: {
            enabled: true,
            y: {
              formatter: function (val) {
                return `${val} รายการ`;
              },
            },
          },
        }}
        series={seriesData}
        type="donut"
        height={260}
      />
    </div>
  );
};

export default DonutChart;
