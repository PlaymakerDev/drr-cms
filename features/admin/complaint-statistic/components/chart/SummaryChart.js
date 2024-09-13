import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SummaryChart = (props) => {
  const {} = props;

  const series = [
    {
      name: "กำลังดำเนินการ",
      data: [95, 101, 150, 77, 84, 65, 55, 44],
    },
    {
      name: "ยุติ",
      data: [95, 101, 150, 85, 47, 84, 67, 55]
    },
  ];

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
        endingShape: "rounded",
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "หน่วยงาน A",
        "หน่วยงาน B",
        "หน่วยงาน C",
        "หน่วยงาน D",
        "หน่วยงาน E",
        "หน่วยงาน F",
        "หน่วยงาน G",
        "หน่วยงาน H",
      ],
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div>
      <Chart series={series} options={options} height={660} type="bar" />
    </div>
  );
};

export default React.memo(SummaryChart);
