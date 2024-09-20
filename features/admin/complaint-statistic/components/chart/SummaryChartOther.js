import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SummaryChartOther = (props) => {
  const {} = props;

  const series = [
    {
      name: "กำลังดำเนินการ",
      data: [94, 60, 130, 97, 54, 75, 105, 94],
    },
    {
      name: "ยุติ",
      data: [75, 71, 130, 95, 77, 104, 97, 35]
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "80%",
        endingShape: "rounded",
        dataLabels: {
          position: 'top',
        },
        borderRadius: 5,
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -10,
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
    colors: ["#0075E9", "#43BE6D"]

  };

  return (
    <div>
      <Chart series={series} options={options} height={660} type="bar" />
    </div>
  );
};

export default React.memo(SummaryChartOther);
