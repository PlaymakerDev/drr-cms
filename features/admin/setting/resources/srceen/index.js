import React from "react";
import {TableResources } from "../components";
import { Button, Col, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const ResourcesScreen = (props) => {
  const {} = props;

  return (
    <>
        <Row align="middle" justify="space-between" gutter={16 } className="mb-4">
        <Col>
          <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
          จัดการแหล่งที่มาข้อมูล
          </Typography.Title>
        </Col>
        <Col>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto xl:!w-auto 2xl:!w-auto !bg-custom-blue'
            >
            เพิ่มแหล่งที่มาข้อมูล
          </Button>
        </Col>
      </Row>
      <section>
        <TableResources />
      </section>
    </>
  );
};

export default React.memo(ResourcesScreen);
