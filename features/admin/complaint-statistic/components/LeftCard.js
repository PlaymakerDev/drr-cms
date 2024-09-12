import { Card, Row, Col, Typography, Progress, Badge, Space } from "antd";
import React from "react";
import { LeftDonutChart, RightDonutChart } from "./chart";

const colorsLeft = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
];
const colorsRight = [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
];

const detailsLeft = [
  "ไฟฟ้าส่องสว่างดับ / ชำรุด / ติดตั้ง",
  "วัชพืช / ต้นไม้ / ขยะ",
  "รุกล้ำเขตทาง / ขาขของริมทาง",
  "ถนนชำรุด",
  "สะพานลอย / ชำรุด / เสียหาย",
  "รถบรทุกน้ำหนักเกิน",
  "ไฟฟ้าส่องสว่างดับ / ชำรุด / ติดตั้ง",
  "วัชพืช / ต้นไม้ / ขยะ",
  "รุกล้ำเขตทาง / ขาขของริมทาง",
  "ถนนชำรุด",
  "สะพานลอย / ชำรุด / เสียหาย",
  "รถบรทุกน้ำหนักเกิน",
];
const detailsRight = [
  "สอบถามสภาพการจราจร",
  "สอบถามเส้นทาง",
  "แจ้งอุบัติเหตุ",
  "ขอความช่วยเหลือรถเสีย",
  "ภัยพิบัติ",
  "สอบถามเส้นทาง",
  "แจ้งอุบัติเหตุ",
  "ขอความช่วยเหลือรถเสีย",
];

const LeftCard = (props) => {
  return (
    <Card className="!p-0">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="!pr-4">
          <section>
            <Typography.Text>หมวดหมู่ : เรื่องร้องเรียน</Typography.Text>
            <div className="space-x-1 pb-3">
              <Typography.Text className="text-3xl font-bold">
                286
              </Typography.Text>
              <Typography.Text>รายการ</Typography.Text>
            </div>
            <Progress
              showInfo={false}
              percent={100}
              success={{
                percent: 70,
              }}
              strokeWidth={15}
            />
            <div className="flex justify-between items-center flex-wrap pt-2 pb-5">
              <Typography.Text className="font-bold">
                🟢 ดำเนินการ (39%)
              </Typography.Text>
              <Typography.Text className="font-bold">
                🔵 ยุติ (60%)
              </Typography.Text>
            </div>
            <Typography.Text>ประเภทเรื่องร้องเรียนร้องทุกข์</Typography.Text>
            <figure className="flex flex-col items-center">
              <LeftDonutChart />
              <Space direction="vertical" className="space-y-2 pt-5">
                {colorsLeft.map((colorsLeft, index) => (
                  <Badge
                    key={colorsLeft}
                    color={colorsLeft}
                    text={detailsLeft[index]}
                  />
                ))}
              </Space>
            </figure>
          </section>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12} className="!pl-4">
          <section>
            <Typography.Text>หมวดหมู่ : ขอรับบริการ</Typography.Text>
            <div className="space-x-1 pb-3">
              <Typography.Text className="text-3xl font-bold">
                36
              </Typography.Text>
              <Typography.Text>รายการ</Typography.Text>
            </div>
            <Progress
              showInfo={false}
              percent={100}
              success={{
                percent: 70,
              }}
              strokeWidth={15}

            />
            <div className="flex justify-between items-center flex-wrap pt-2 pb-5">
              <Typography.Text className="font-bold">
                🟢 ดำเนินการ (39%)
              </Typography.Text>
              <Typography.Text className="font-bold">
                🔵 ยุติ (60%)
              </Typography.Text>
            </div>
            <Typography.Text>ประเภทเรื่องขอรับบริการ</Typography.Text>
            <figure className="flex flex-col items-center">
              <RightDonutChart />
              <Space direction="vertical" className="space-y-2 pt-5">
                {colorsRight.map((colorsRight, index) => (
                  <Badge
                    key={colorsRight}
                    color={colorsRight}
                    text={detailsRight[index]}
                  />
                ))}
              </Space>
            </figure>
          </section>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(LeftCard);
