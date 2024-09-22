import React from "react";
import { Card, Typography, Row, Col } from "antd";
import {
  ComplaintTop3Left,
  ComplaintTop3Mid,
  ComplaintTop3Right,
  ComplaintTypeTotalChart,
} from "../../chart";

const ContentComplaintType = (props) => {
  const { data } = props;

  // console.log('testtt',data.top3[0].label);
  
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Typography.Title level={5} className="!m-0">
            ประเภทเรื่องร้องเรียน ภายในวันนี้
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
          <ComplaintTypeTotalChart data = {data}/>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Typography.Title level={5}>
            TOP 3 ประเภทเรื่องร้องเรียน
          </Typography.Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Left data={data}/>
          <Typography.Text>
            {data?.top3[0]?.label || 'ไม่มีข้อมูล'}
          </Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Mid data={data}/>
          <Typography.Text>
          {data?.top3[1]?.label || 'ไม่มีข้อมูล'}
          </Typography.Text>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8} className="text-center">
          <ComplaintTop3Right data={data}/>
          <Typography.Text>
          {data?.top3[2]?.label || 'ไม่มีข้อมูล'}
          </Typography.Text>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ContentComplaintType);
