import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintByDepartmentChart = (props) => {
  const { data } = props;

  if (!data || !data.series || !data.labels) {
    return ;
  }

  const mutableData = JSON.parse(JSON.stringify(data));
  const total = mutableData?.series[2].data[0]

  return (
    <div >
      <Chart
        series={mutableData?.series || []}
        options={{
          grid: {
            padding: {
              left:0,
              right:0,
              top: 0,
              bottom:-40
            }
          },
          chart: {
            type: "bar",
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
            bar: {
              horizontal: true,
              barHeight: "80%",
              endingShape: "rounded",
              dataLabels: {
                position: "top",
              },
              borderRadius: 2,
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -10,
            offsetY: -3,
          },
          stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
          },
          xaxis: {
            categories: data.labels || [],
            min: 0, 
            max: total + 1, 
            tickAmount: total + 1,
            labels: {
              formatter: (value) => Math.round(value),
            },
          },
          fill: {
            opacity: 1,
          },
          colors: ["#0075E9", "#43BE6D", "#F1E14A"],
          legend: {
            position:'bottom',
            offsetY:'15',
            itemMargin: {
              horizontal: 4,
              vertical: 0,
            },
          markers: {
              size: 14,
              shape: 'line',
               strokeWidth: 6,
            }
          },
        }}
        height={180}
        type="bar"
      />
    </div>
  );
};

export default React.memo(ComplaintByDepartmentChart);
