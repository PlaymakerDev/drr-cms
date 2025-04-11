import { Card, Row, Col, Typography, Segmented } from "antd";
import React, { useEffect, useState } from "react";
import { ServiceChart, SummaryChart } from "./chart";

const RightCard = (props) => {
  const { apiGetDeComplaint, apiGetServiceProgress } = props;

  const options = ["สำนัก", "หน่วยงาน"]
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const dataSearch = apiGetDeComplaint[1].department_complain.search
  const data = apiGetDeComplaint[1].department_complain

  const fetchData = (detype) => {
    apiGetDeComplaint[0]("/api/v1/dashboard/department_complain", { ...dataSearch, deptType: detype }, false, {})
  }

  const ChangeOption = () => {
    if (selectedOption == options[0]) {
      setSelectedOption(options[1]);
      fetchData("2")
    } else {
      setSelectedOption(options[0]);
      fetchData("1")
    }
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
          <ServiceChart
            data={apiGetServiceProgress.progress_by_date_range} />
        </section>
      </div>
      <header className="flex justify-between items-center">
        <Typography.Text className="font-bold">
          สรุปเรื่องร้องเรียนร้องทุกข์แยกจากหน่วยงานรับผิดชอบ
        </Typography.Text>
        <Segmented options={options} onChange={ChangeOption} />
      </header>
      <section>
        <SummaryChart seriesData={data.data.series} labelsData={data.data.labels} />
      </section>
    </Card>
  );
};

export default React.memo(RightCard);
