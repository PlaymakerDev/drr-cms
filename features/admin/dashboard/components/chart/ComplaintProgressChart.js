import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintProgressChart = (props) => {
  const { data } = props;
  
  const mutableData = JSON.parse(JSON.stringify(data));

  console.log("data is in the chart", data.series);

  // const mock_data = [
  //   { name: "ดำเนินการอยู่", data: [0, 2, 9] },
  //   { name: "ยุติ", data: [1, 0, 3] },
  // ];
 
  return (
    <div>
      <Chart
        series={mutableData?.series || []}
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "40%",
              endingShape: "rounded",
              dataLabels: {
                position: "top",
              },
              borderRadius: 5,
            },
          },
          dataLabels: {
            enabled: false,
            offsetX: -10,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: data.labels
          },
          fill: {
            opacity: 1,
          },
          colors: ["#0075E9", "#43BE6D"],
        }}
        height={180}
        type="bar"
      />
    </div>
  );
};

export default React.memo(ComplaintProgressChart);
