import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LeftDonutChart = (props) => {
  const { servicedata , colorChartRight } = props;

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
          labels: servicedata?.labels || [],

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
          colors: colorChartRight,
          stroke: {
            width: 0,
          },
        }}
        series={servicedata.series || nodata}
        type="donut"
        width="450"
      />
    </div>
  );
};

export default LeftDonutChart;
