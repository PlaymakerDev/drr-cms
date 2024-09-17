import React from "react";
import { Modal } from "antd";
import dynamic from "next/dynamic";
const Chart = dynamic(
  () => {
    return import("react-apexcharts");
  },
  { ssr: false }
);

const Content = () => {
  const series = [
    {
      name: "กำลังดำเนินการ",
      data: [95, 101, 150, 95, 101, 150, 95, 101, 150, 95, 101, 150],
    },
    {
      name: "ยุติ",
      data: [45, 50, 139, 95, 101, 150, 95, 101, 150, 95, 101, 150],
    },
  ];

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "60%",
        endingShape: "rounded",
        dataLabels: {
          position: "top",
        },
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
      categories: [
        "มกราคม 65",
        "กุมภาพันธ์ 65",
        "มีนาคม 65",
        "เมษายน 65",
        "พฤษภาคม 65",
        "มิถุนายน 65",
        "กรกฎาคม 65",
        "สิงหาคม 65",
        "กันยายน 65",
        "ตุลาคม 65",
        "พฤศจิกายน 65",
        "ธันวาคม 65",
      ],
    },
    fill: {
      opacity: 1,
    },
  };

  return (
    <div>
      <Chart series={series} options={options} height={500} type="bar" />
    </div>
  );
};

const ProgressDetail = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal
      title="ผลการดำเนินงานร้องเรียนร้องทุกข์"
      open={open}
      centered
      onCancel={() => setOpen(false)}
      width={1200}
      footer={null}
    >
      <main className="my-5">
        <Content />
      </main>
    </Modal>
  );
};

export default React.memo(ProgressDetail);
