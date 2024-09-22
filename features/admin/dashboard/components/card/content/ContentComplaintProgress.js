import React, { useState } from "react";
import { Typography } from "antd";
import { ComplaintProgressChart } from "../../chart";
import { ProgressChartDetail } from "../../modal";

const INIT_MODAL = { open: false };

const ContentComplaintProgress = (props) => {
  const { data } = props;

  const [openProgressDetail, setOpenProgressDetail] = useState(INIT_MODAL);

  return (
    <>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          ผลการดำเนินงานร้องเรียนร้องทุกข์
        </Typography.Title>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => setOpenProgressDetail({ open: true })}
        >
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
        <ProgressChartDetail
          open={openProgressDetail.open}
          setOpen={setOpenProgressDetail}
        />
      </section>
      <section>
        <ComplaintProgressChart 
          data = {data}
        />
      </section>
    </>
  );
};

export default React.memo(ContentComplaintProgress);
