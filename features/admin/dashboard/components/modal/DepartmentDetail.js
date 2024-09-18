import React from "react";
import { Modal } from "antd";
import dynamic from "next/dynamic";
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Chart = dynamic(
  () => import("react-apexcharts"),
  { ssr: false }
);

const Content = () => {
  const series = [{
    name: 'กำลังดำเนินการ',
    data: [95, 101, 150,95, 101, 150,60]
  }, {
    name: 'ยุติ',
    data: [95, 101, 150,95, 101, 150,70]
  }, {
    name: 'รวม',
    data: [45, 50, 139,95, 101, 150,130]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -10,
    },
    stroke: {
      show: true,
      width: 1,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['หน่วยงาน A', 'หน่วยงาน B', 'หน่วยงาน C', 'หน่วยงาน D', 'หน่วยงาน E', 'หน่วยงาน F', 'หน่วยงาน G'],
    },
    fill: {
      opacity: 1
    },
    colors: ["#0075E9", "#43BE6D","#F1E14A"]
  }

  return (
    <div className="overflow-auto" style={{ maxHeight: '400px' }}>
      <Chart
        series={series}
        options={options}
        height={500}
        type='bar'
      />
    </div>
  )
};

const DepartmentDetail = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal
      title="หน่วยงานที่มีเรื่องร้องเรียนร้องทุกข์มากที่สุด ภายในวันนี้"
      open={open}
      centered
      onCancel={() => setOpen(false)}
      width={1200}
      footer={null}
    >
      <div>
        <main className="my-5">
          <Content />
        </main>
      </div>
    </Modal>
  );
};

export default React.memo(DepartmentDetail);
