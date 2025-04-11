import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LeftDonutChart = (props) => {
  const { complaindata , colorChartLeft } = props;

  const complainDataseries = complaindata?.series
  const complainDatalabels = complaindata?.labels

  const nodata = [0];

  return (
    <div>
      <Chart
        options={{
          chart: {
            type: "donut",
            toolbar: {
              show: false,
            },
            fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
          },
          noData: {
            text: "ไม่มีข้อมูล",
            align: "center",
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: 200,
                },
              },
            },
          ],
          colors: colorChartLeft,
          labels: complainDatalabels || [],
          stroke: {
            width: 0,
          },

        }}
        series={complainDataseries || nodata}
        type="donut"
        width="460"
      />
    </div>
  );
};

export default LeftDonutChart;
