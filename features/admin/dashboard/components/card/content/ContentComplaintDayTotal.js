import React, { useState } from "react";
import { Card, Typography } from "antd";
import { ComplaintDayTotalChart } from "../../chart";
import { DayTotalChartDetail } from "../../modal";

const INIT_MODAL = { open: false };

const ContentComplaintDayTotal = (props) => {
  const { data } = props;

  const [openDayTotalDetail, setOpenDayTotalDetail] = useState(INIT_MODAL);

  return (
    <>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          จำนวนเรื่องร้องทุกข์ ภายในวันนี้
        </Typography.Title>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => setOpenDayTotalDetail({ open: true })}
        >
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
        <DayTotalChartDetail
          open={openDayTotalDetail.open}
          setOpen={setOpenDayTotalDetail}
        />
      </section>
      <section>
        <ComplaintDayTotalChart data={data} />
      </section>
    </>
  );
};

export default React.memo(ContentComplaintDayTotal);
