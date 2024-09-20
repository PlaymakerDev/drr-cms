import { Card, Row, Col, Typography, Segmented } from "antd";
import React, { useState } from "react";
import { ServiceChart, SummaryChart, SummaryChartOther } from "./chart";

const RightCard = (props) => {
  const {} = props;

  const [selectedOption, setSelectedOption] = useState("สำนัก");

  const ChangeOption = (option) => {
    setSelectedOption(option);
  };

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
      <header className="flex justify-between items-center">
        <Typography.Text className="font-bold">
          สรุปเรื่องร้องเรียนร้องทุกข์แยกจากหน่วยงานรับผิดชอบ
        </Typography.Text>
        <Segmented options={["สำนัก", "หน่วยงาน"]} onChange={ChangeOption} />
      </header>
      <section>
        {selectedOption === "สำนัก" && <SummaryChart type="สำนัก" />}
        {selectedOption === "หน่วยงาน" && <SummaryChartOther type="หน่วยงาน" />}
      </section>
    </Card>
  );
};

export default React.memo(RightCard);
