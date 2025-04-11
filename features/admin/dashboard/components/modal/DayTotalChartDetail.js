import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Col, Row } from "antd";
import { ICON_LABELS } from "@/utils/constant";
import Image from "next/image";
import dynamic from "next/dynamic";
import config from '@/config'

const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
  loading: () => <div>Loading chart...</div>,
});

const Content = ({ data }) => {
  if (!data || !data.series || !data.labels) {
    return <div>No data available</div>;
  }

  const mock_data = [
    {
      name: "จำนวน",
      data: data.series,
    },
  ];

  return (

    <Chart
      series={mock_data}
      options={{
        chart: {
          type: "bar",
          toolbar: {
            show: false,
          },
          fontFamily: "IBMPlexSansThai-Regular, Arial, sans-serif",
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "50%",
            endingShape: "rounded",
            dataLabels: {
              position: "top",
            },
            Radius: 3,
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
          categories: data.labels,
          labels: {
            show: false,
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
      height={500}
      type="bar"
      
    />
  );
};

const DayTotalChartDetail = ({ open, setOpen, data, logo }) => {
  const [isChartReady, setIsChartReady] = useState(false);

  useEffect(() => {
    if (open && data && data.series && data.labels) {
      setIsChartReady(true);
    } else {
      setIsChartReady(false);
    }
  }, [open, data]);

  const chartWidth = data.labels.length * 80

  return (
    <Modal
      title="จำนวนเรื่องร้องทุกข์ ภายในวันนี้"
      open={open}
      centered
      onCancel={() => setOpen(false)}
      width={1200}
      footer={null}

    >
      {isChartReady ? (
        <main className="my-5 overflow-x-auto ">
          <section style={{ width: chartWidth, minWidth: "100%" }}>


            <Content data={data} />
            {/* <div className="flex justify-center items-center -mt-10 ml-6 border border-red-500"> */}
            <Row className="flex flex-nowrap justify-between items-end ml-9 -mt-8 ">
              {data.labels.map((item, index) => {
                const matchedItem = logo?.find(
                  (logoItem) => logoItem.mas_name === item
                );

                return (
                  <>
                    <Col className="!w-full text-center flex justify-center" key={index}>
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
                  </>);
              })}
            </Row>

            {/* </div> */}
          </section>
        </main>
      ) : (
        <div className="text-center">Loading datas...</div>
      )}
    </Modal>
  );
};

export default React.memo(DayTotalChartDetail);
