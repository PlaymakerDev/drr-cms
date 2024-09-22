import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintByDepartmentChart = (props) => {
  const { data } = props;
console.log('tetetet' , data);

  const mutableData = JSON.parse(JSON.stringify(data));

  const mock_data = [
    {
      name: "กำลังดำเนินการ",
      data: [95, 101, 150],
    },
    {
      name: "ยุติ",
      data: [95, 101, 150],
    },
    {
      name: "รวม",
      data: [45, 50, 139],
    },
  ];

  return (
    <div>
      <Chart
        series={mutableData?.series}
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
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
          },
          stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
          },
          xaxis: {
            categories: data.labels,
          },
          fill: {
            opacity: 1,
          },
          colors: ["#0075E9", "#43BE6D", "#F1E14A"],
        }}
        height={220}
        type="bar"
      />
    </div>
  );
};

export default React.memo(ComplaintByDepartmentChart);
