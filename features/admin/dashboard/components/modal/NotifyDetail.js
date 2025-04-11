import React, { useMemo } from "react";
import { Modal, Avatar, Typography, Badge, ConfigProvider } from "antd";
import { BellFilled } from "@ant-design/icons";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat); 
dayjs.locale('th');

// const data = [
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "Facebook",
//     date: "05/09/67 09.25น.",
//   },
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "LINE",
//     date: "05/09/67 09.25น.",
//   },
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "YouTube",
//     date: "05/09/67 09.25น.",
//   },
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "YouTube",
//     date: "05/09/67 09.25น.",
//   },
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "YouTube",
//     date: "05/09/67 09.25น.",
//   },
//   {
//     title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
//     detail: "YouTube",
//     date: "05/09/67 09.25น.",
//   },
// ];

const Content = (props) => {
  const { complain } = props;
  const renderCard = useMemo(() => {
    return complain.data.map((item, index) => (
      <div
        className="container bg-[#5B5B5B30] rounded-md px-5 py-3 mt-3"
        key={index}
      >
        <div className="flex justify-between">
          <div className="flex items-center gap-5">
            <Avatar
              icon={<BellFilled />}
              className="!flex !justify-center !items-center !bg-black"
            />
            <div className="flex flex-col">
              <Typography.Title level={5} className="!m-0">
                {item.complaint_type_name}
              </Typography.Title>
              <ConfigProvider
                theme={{
                  components: {
                    Badge: {
                      colorText: "gray",
                    },
                  },
                }}
              >
                <Badge
                  color="red"
                  text={item.source_type_name || "ไม่มีข้อมูล"}
                />
              </ConfigProvider>
            </div>
          </div>
          <div>
            {dayjs(item.date_received).format('D MMMM BBBB HH:mm')}
          </div>
        </div>
      </div>
    ));
  }, []);

  return <div>{renderCard}</div>;
};

const NotifyDetail = (props) => {
  const { open, setOpen, data } = props;

  return (
    <Modal
      title="เรื่องร้องเรียนร้องทุกข์ล่าสุด ภายในวันนี้"
      open={open}
      destroyOnClose
      centered
      onCancel={() => setOpen({ open: false })}
      width={1000}
      footer={false}
    >
      <main className="p-5 max-h-[500px] overflow-y-auto">
        <Content complain={data} />
      </main>
    </Modal>
  );
};

export default React.memo(NotifyDetail);
