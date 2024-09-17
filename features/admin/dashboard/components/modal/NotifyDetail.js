import React, { useMemo } from "react";
import { Modal, Avatar, Typography, Badge } from "antd";
import { BellFilled } from '@ant-design/icons';

const data = [
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "Facebook",
    date: "05/09/67 09.25น.",
  },
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "LINE",
    date: "05/09/67 09.25น.",
  },
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "YouTube",
    date: "05/09/67 09.25น.",
  },
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "YouTube",
    date: "05/09/67 09.25น.",
  },
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "YouTube",
    date: "05/09/67 09.25น.",
  },
  {
    title: "ไฟฟ้าส่องสว่างดับ / ชำรุด ",
    detail: "YouTube",
    date: "05/09/67 09.25น.",
  },
];

const Content = () => {
  const renderCard = useMemo(() => {
    return data.map((item, index) => (
      <div className='container bg-[#5B5B5B30] rounded-md px-5 py-3 mt-3' key={index}>
        <div className='flex justify-between'>
          <div className='flex items-center gap-5'>
            <Avatar
              icon={<BellFilled />}
              className='!flex !justify-center !items-center !bg-black'
            />
            <div className='flex flex-col'>
              <Typography.Title level={5} className='!m-0'>{item.title}</Typography.Title>
              <Badge color='red' text={item.detail} />
            </div>
          </div>
          <div>
            <Typography.Text>{item.date}</Typography.Text>
          </div>
        </div>
      </div>
    ));
  }, [data]);

  return (
    <div>
      {renderCard}
    </div>
  );
};

const NotifyDetail = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal
      title="เรื่องร้องเรียนล่าสุด ภายในวันนี้"
      open={open}
      destroyOnClose
      centered
      onCancel={() => setOpen({ open: false })}
      width={1000}
      footer={false}
    >
      <main className="p-5 max-h-[500px] overflow-y-auto">
        <Content />
      </main>
    </Modal>
  );
};

export default React.memo(NotifyDetail);
