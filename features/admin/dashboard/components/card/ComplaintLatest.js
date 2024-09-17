import React, { useState } from "react";
import { Card, Typography } from "antd";
import { NotifyCard } from "../notify-card";
import { NotifyDetail } from "../modal";

const INIT_MODAL = { open: false };

const ComplaintLatest = (props) => {
  const {} = props;

  const [openNotifyDetail, setOpenNotifyDetail] = useState(INIT_MODAL);

  return (
    <Card>
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          เรื่องร้องเรียนล่าสุด ภายในวันนี้
        </Typography.Title>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => setOpenNotifyDetail({ open: true })}
        >
          แสดงทั้งหมด
        </Typography.Text>
        <NotifyDetail
          open={openNotifyDetail.open}
          setOpen={setOpenNotifyDetail}
        />
      </section>
      <section>
        <NotifyCard />
      </section>
    </Card>
  );
};

export default React.memo(ComplaintLatest);
