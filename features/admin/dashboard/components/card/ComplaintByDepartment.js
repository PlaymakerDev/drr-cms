import React, { useState } from "react";
import { Card, Typography } from "antd";
import { ComplaintByDepartmentChart } from "../chart";
import { DepartmentDetail } from "../modal";

const INIT_MODAL = { open: false };

const ComplaintByDepartment = (props) => {
  const {} = props;

  const [openDepartmentDetail, setOpenDepartmmentDetail] = useState(INIT_MODAL);

  return (
    <Card className="!w-full !h-full">
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0 ">
          TOP3 หน่วยงานที่มีเรื่องร้องเรียนร้องทุกข์มากที่สุด ในวันนี้
        </Typography.Title>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => setOpenDepartmmentDetail({ open: true })}
        >
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
        <DepartmentDetail
          open={openDepartmentDetail.open}
          setOpen={setOpenDepartmmentDetail}
        />
      </section>
      <section>
        <ComplaintByDepartmentChart />
      </section>
    </Card>
  );
};

export default React.memo(ComplaintByDepartment);
