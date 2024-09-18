import React from "react";
import { Card, Typography, Row, Col } from "antd";
import {
  ComplaintTop3Left,
  ComplaintTop3Mid,
  ComplaintTop3Right,
  ComplaintTypeTotalChart,
} from "../chart";

const ComplaintType = (props) => {
  const {} = props;

  return (
    <Card>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Typography.Title level={5} className="!m-0">
            ประเภทเรื่องร้องเรียนร้องทุกข์ ภายในวันนี้
          </Typography.Title>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={24}
          xl={24}
          xxl={24}
          className="flex justify-center items-center"
        >
          <ComplaintTypeTotalChart />
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Typography.Title level={5}>
            TOP 3 ประเภทเรื่องร้องเรียน
          </Typography.Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Left />
          <Typography.Text>
            ไฟฟ้าส่องสว่าง/ดับ/ชำรุด/ติดตั้ง
          </Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Mid />
          <Typography.Text>
            ถนนชำรุด
          </Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Right />
          <Typography.Text>
            ป้ายจราจรเสียหาย/ชำรุด/ติดตั้ง
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default React.memo(ComplaintType);
