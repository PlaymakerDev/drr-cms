import React from "react";
import { FormSearchUsersetting, TableReport, TableUsersetting } from "../components";
import { Typography } from "antd";

const ReportScreen = (props) => {
  const {} = props;

  return (
    <>
      <section>
        <Typography.Title level={5} className='!text-[#ffffff]'>รายงาน</Typography.Title>
        <TableReport />
      </section>
    </>
  );
};

export default React.memo(ReportScreen);
