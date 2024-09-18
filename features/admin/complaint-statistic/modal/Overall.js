import React from "react";
import { Modal, Row, Col, Typography } from "antd";
import Image from "next/image";

const Content = (props) => {
  const { iconData } = props;

  const sortedData = [...iconData].sort((a, b) => b.count - a.count);

  return (
    <div className="max-h-[500px] overflow-y-auto overflow-x-hidden">
      <Row gutter={[16, 16]}>
        {sortedData.map((item, index) => (
          <Col key={index} xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <div className="flex justify-between items-center p-4 border border-gray-200 rounded-lg shadow-sm">
              <article className="flex items-center">
                <Image src={item.src} alt={item.alt} width={50} height={50} />
                <div className="flex flex-col ml-4">
                  <Typography.Text className="text-lg font-semibold">
                    {item.title}
                  </Typography.Text>
                  <Typography.Text className="text-sm text-gray-600">
                    แหล่งที่มาข้อมูล
                  </Typography.Text>
                </div>
              </article>
              <div className="flex items-center">
                <Typography.Text className="text-4xl font-bold mr-2">
                  {item.count}
                </Typography.Text>
                <Typography.Text className="text-lg font-bold text-gray-700">
                  รายการ
                </Typography.Text>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const Overall = (props) => {
  const { open, setOpen, iconData } = props;

  return (
    <Modal
      title="เรื่องร้องเรียนรวมทั้งหมด"
      open={open}
      destroyOnClose
      centered
      onCancel={() => setOpen({ open: false })}
      width={1000}
      footer={false}
    >
      <main className="my-5">
        <Content iconData={iconData} />
      </main>
    </Modal>
  );
};

export default React.memo(Overall);
