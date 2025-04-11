import React from "react";
import { Col, Row } from 'antd';
import dynamic from "next/dynamic";
import { ICON_LABELS } from "@/utils/constant";
import Image from "next/image";
import config from '@/config'

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ComplaintDayTotalChart = (props) => {
  const { data, logo } = props;

  const mock_data = [
    {
      name: "จำนวน",
      data: data.series.slice(0, 9),
    },
  ];

  return (
    <div className="">
      <Chart
        className=""
        series={mock_data}
        options={{
          chart: {
            type: "bar",
            toolbar: {
              show: false,
            },
            fontFamily: 'IBMPlexSansThai-Regular, Arial, sans-serif',
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
              endingShape: "rounded",
              dataLabels: {
                position: "top",
              },
              Radius: 4,
            },
          },
          dataLabels: {
            enabled: true,
          },
          stroke: {
            show: true,
            width: 2,
            colors: ["transparent"],
          },
          xaxis: {
            categories: data.labels.slice(0, 9),
            labels: {
              show: false
            },
          },
          fill: {
            opacity: 1,
          },
          legend: {
            show: false,
          },
          colors: ["#0075E9"],
        }}
        height={150}
        type="bar"
      />
      <div className="flex justify-center items-center -mt-10 ml-6">
        {/* <Row className="w-[95%] flex flex-nowrap justify-between items-center  ml-1"> */}
        <Row className="w-[95%] flex flex-nowrap justify-between items-center  ml-1">
          {data.labels.slice(0, 9).map((item, index) => {
            const matchedItem = logo?.find(
              (logoItem) => logoItem.mas_name === item
            );

            return (
              <Col className="w-full text-center flex justify-center " key={index}>
                <Image
                  src={
                    matchedItem && matchedItem.logo
                      ? `${config.source_type_image}/${matchedItem.logo}`
                      : ""
                  }
                  width={20}
                  height={20}
                  alt={""}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default React.memo(ComplaintDayTotalChart);
