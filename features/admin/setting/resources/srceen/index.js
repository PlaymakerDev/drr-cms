import React from 'react';
import { TableResources } from "../components";
import { Button, Col, Row, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import AddComplaint from "../components/modal/AddComplaint";


const ResourcesScreen = (props) => {
  const { } = props;
  return (
    <>
      <Row align="middle" justify="space-between" gutter={16} className="mb-4">
        <Col>
          <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
            จัดการแหล่งที่มาข้อมูล
          </Typography.Title>
        </Col>
        <Col>
          <AddComplaint/>
        </Col>
      </Row>
      <section>
        <TableResources />
      </section>
    </>
  );
};

export default React.memo(ResourcesScreen);
