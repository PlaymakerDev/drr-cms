import React from "react";
import { FormSearchUsersetting, TableReport, TableUsersetting } from "../components";
import { Typography } from "antd";

const ReportScreen = (props) => {
  const { } = props;

  return (
    <>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>รายงาน</Typography.Title>
      </section>
      <section className="mt-5">
        <TableReport />
      </section>
    </>
  );
};

export default React.memo(ReportScreen);
