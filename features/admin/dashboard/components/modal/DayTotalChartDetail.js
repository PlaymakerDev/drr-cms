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
  const series = [{
    name: 'แท่ง',
    data: [105, 65, 60, 63, 42, 185, 38, 42]
  }]

  const options = {
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
        endingShape: 'rounded',
        dataLabels: {
          position: 'top',
        },
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
      categories: ['#','#','#','#','#','#','#','#'],
    },
    fill: {
      opacity: 1
    },
      legend: {
    show: false
  }
  }
  return (
    <div>
      <Chart
        series={series}
        options={options}
        height={500}
        type='bar'
      />
    </div>
  )
};

const DayTotalChartDetail = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal
      title="จำนวนเรื่องร้องทุกข์ ภายในวันนี้"
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

export default React.memo(DayTotalChartDetail);
