import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Progress,
  Badge,
  Space,
  ConfigProvider,
} from "antd";
import { LeftDonutChart } from "../chart";
const _ = require('lodash');

const ContentComplain = (props) => {
  const { complaindata, sortComplainLabel , colorChartLeft, complainstatus } = props;

  const getprogress = complainstatus?.[0]?.status_count

  const getend = complainstatus?.[1]?.status_count

  const dataLabel = sortComplainLabel

  const total = getprogress + getend

  const perscentTotal = (100 / total) * getprogress

  return (
    <>
      <section>
        <Typography.Text className="text-xl font-bold">หมวดหมู่ : เรื่องร้องเรียน</Typography.Text>
        <div className="space-x-1 pb-3">
          <Typography.Text className="text-3xl font-bold">{total}</Typography.Text>
          <Typography.Text>รายการ</Typography.Text>
        </div>
        <Progress
          showInfo={false}
          percent={perscentTotal}
          success={{
            percent: 0,
            strokeColor: "#0075E9",
          }}
          strokeWidth={15}
          trailColor="#43BE6D"
        // strokeColor="#43BE6D"
        />
        <div className="flex justify-between items-center flex-wrap pt-2 pb-5">
          <Typography.Text className="font-bold">
            🔵 ดำเนินการ ({complainstatus?.[0]?.status_percent || 0}%)
          </Typography.Text>
          <Typography.Text className="font-bold">
            🟢 ยุติ ({complainstatus?.[1]?.status_percent || 0}%)
          </Typography.Text>
        </div>
        <Typography.Text>ประเภทเรื่องร้องเรียนร้องทุกข์</Typography.Text>
        <figure className="flex flex-col items-center">
          <LeftDonutChart 
          complaindata={complaindata}
          colorChartLeft={colorChartLeft} />
          <ConfigProvider
            theme={{
              components: {
                Badge: {
                  colorTextHeading: "#000000",
                  colorTextDescription: "#000000",
                  colorText: "#000000",
                },
              },
            }}
          >
            <Space direction="vertical" className="space-y-2 pt-5">

              {dataLabel.map((item, index) => (
                <Row key={index}>
                  <Badge
                    color={colorChartLeft[index]}
                    text={item}
                  />

                </Row>

              ))}

            </Space>
          </ConfigProvider>
        </figure>
      </section>
    </>
  );
};

export default React.memo(ContentComplain);
