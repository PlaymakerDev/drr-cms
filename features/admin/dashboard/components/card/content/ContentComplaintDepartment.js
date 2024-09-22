import React, { useState } from "react";
import { Typography } from "antd";
import { ComplaintByDepartmentChart } from "../../chart";
import { DepartmentDetail } from "../../modal";

const INIT_MODAL = { open: false };

const ContentComplaintByDepartment = (props) => {
  const { data } = props;

  const [openDepartmentDetail, setOpenDepartmmentDetail] = useState(INIT_MODAL);
  return (
    <>
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
        <ComplaintByDepartmentChart data={data} />
      </section>
    </>
  );
};

export default React.memo(ContentComplaintByDepartment);
