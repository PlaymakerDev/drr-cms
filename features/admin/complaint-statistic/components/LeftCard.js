import { Card, Row, Col, Typography, Progress, Badge, Space, ConfigProvider } from "antd";
import React from "react";
import { LeftDonutChart, RightDonutChart } from "./chart";

const colorsLeft = [
  "#25507F",
  "#264B72",
  "#093563",
  "#0050A0",
  "#006AD2",
  "#007DF8",
  "#0F87FE",
  "#3098FE",
  "#3FC8E4",
  "#6DB6FE",
  "#9BCDFE",
  "#C3E0FD",
];
const colorsRight = [
  "#1C4C2C",
  "#287241",
  "#369857",
  "#43BE6D",
  "#6BD690",
  "#69CB8A",
  "#B4E5C5",
  "#D8F1E1",
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
                  <ConfigProvider 
                  theme={{
                    components:{
                      Badge:{
                        colorTextHeading: '#000000',
                        colorTextDescription: '#000000',
                        colorText: '#000000',}
                    }
                  }}>
                  <Badge
                    key={colorsLeft}
                    color={colorsLeft}
                    text={detailsLeft[index]}
                    />
                    </ConfigProvider>
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
                  <ConfigProvider
                  theme={{
                    components:{
                      Badge:{
                        colorTextHeading: '#000000',
                        colorTextDescription: '#000000',
                        colorText: '#000000',}
                    }
                  }}>
                  <Badge
                    key={colorsRight}
                    color={colorsRight}
                    text={detailsRight[index]}
                    />
                    </ConfigProvider>
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
