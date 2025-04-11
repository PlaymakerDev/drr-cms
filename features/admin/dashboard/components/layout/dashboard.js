import React from "react";
import {
  ComplaintCurrent,
  ComplaintProgress,
  ComplaintByDepartment,
  ComplaintContact,
  ComplaintDayTotal,
  ComplaintProgressStat,
  ComplaintType,
  ComplaintComparison,
  ComplaintLatest,
} from "../card";
import { Col, Row } from "antd";

const DashboardLayout = (props) => {
  const {} = props;

  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} sm={24} md={24} lg={24} xl={16} xxl={12}>
        <ComplaintCurrent />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={12}>
        <ComplaintProgress />
      </Col>
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={8}>
        <ComplaintContact />
        <section className="mt-3">
          <ComplaintDayTotal />
        </section>
        <section className="mt-3">
          <ComplaintByDepartment />
        </section>
      </Col>      
      <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={8}>
        <ComplaintProgressStat />
        <section className="mt-3">
          <ComplaintType />
        </section>
      </Col>      
      <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={8}>
        <ComplaintComparison />
        <section className="mt-3">
          <ComplaintLatest />
        </section>
      </Col>      
    </Row>
  );
};

export default React.memo(DashboardLayout);
