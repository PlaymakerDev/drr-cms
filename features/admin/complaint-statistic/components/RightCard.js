import { Card, Row, Col, Typography, Segmented } from "antd";
import React from "react";

import {
  ServiceChart,
  SummaryChart,
} from "./chart";

const RightCard = (props) => {
  const {} = props;

  return (
    <Card className="!p-0">
      <div>
        <header className="flex flex-col ">
          <Typography.Text className="font-bold">
            ผลการดำเนินงานร้องเรียนร้องทุกข์
          </Typography.Text>
        </header>
        <section>
          <ServiceChart />
        </section>
      </div>
      <div>
        <header className="flex justify-between items-center">
          <Typography.Text className="font-bold">
            สรุปเรื่องร้องเรียนร้องทุกข์แยกจากหน่วยงานรับผิดชอบ
          </Typography.Text>
          <Segmented options={["สำนัก", "หน่วยงาน"]} />
        </header>
        <section>
          <SummaryChart />
        </section>
      </div>
    </Card>
  );
};

export default React.memo(RightCard);
