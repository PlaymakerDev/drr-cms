import React, { useState, useEffect } from "react";
import { Modal } from "antd";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Content = ({ department }) => {
  const clonedDepartment = department
    ? JSON.parse(JSON.stringify(department))
    : null;

  const data = clonedDepartment?.series;
  const labels = clonedDepartment?.labels;
  const total = clonedDepartment?.series[2].data[0];

  return (
    <div>
      <Chart
        series={data || []}
        options={{
          chart: {
            type: "bar",
            toolbar: { show: false },
            fontFamily: "IBMPlexSansThai-Regular, Arial, sans-serif",
          },
          plotOptions: {
            bar: {
              horizontal: true,
              barHeight: "50%",
              endingShape: "rounded",
              dataLabels: { position: "top" },
              borderRadius: 2,
            },
          },
          dataLabels: {
            enabled: true,
            offsetX: -10,
            offsetY: -2,
          },
          stroke: {
            show: true,
            width: 1,
            colors: ["transparent"],
          },
          xaxis: {
            categories: labels || [],
            min: 0, 
            max: total + 1, 
            tickAmount: total + 1,
            labels: {
              formatter: (value) => Math.round(value),
            },
          },
          fill: { opacity: 1 },
          colors: ["#0075E9", "#43BE6D", "#F1E14A"],
          legend: {
            position: "bottom",
            offsetY: "0",
            markers: { size: 16, shape: "line", strokeWidth: 6 },
          },
        }}
        height={500}
        type="bar"
      />
    </div>
  );
};

const DepartmentDetail = (props) => {
  const { open, setOpen, data } = props;
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    if (open && data && data.series && data.labels) {
      setIsChartReady(true);
    } else {
      setIsChartReady(false);
    }
  }, [open, data]);

  return (
    <Modal
      title="หน่วยงานที่มีเรื่องร้องเรียนร้องทุกข์มากที่สุด ภายในวันนี้"
      open={open}
      centered
      onCancel={() => setOpen(false)}
      width={1500}
      footer={null}
    >
      {isChartReady ? (
        <main className="my-5 max-h-[400px] overflow-y-auto overflow-x-hidden pr-10">
          <Content department={data} />
        </main>
      ) : (
        <div className="flex justify-center items-center h-full">
          <p>Loading data...</p>
        </div>
      )}
    </Modal>
  );
};

export default React.memo(DepartmentDetail);
