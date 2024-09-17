import React from "react";
import { Modal, Row, Col, Typography } from "antd";
import Image from "next/image";
import Hotline from "@/public/images/Hotline.svg";
import Traffic from "@/public/images/Traffic.svg";
import Facebook from "@/public/images/Facebook.svg";
import GECC from "@/public/images/GECC.svg";
import WWW from "@/public/images/WWW.svg";
import WWW2 from "@/public/images/WWW2.svg";
import WWW3 from "@/public/images/WWW3.svg";
import Book from "@/public/images/Book.svg";

const data = [
  { src: Hotline, alt: "Hotline", title: "สายด่วน 1146", count: 286 },
  { src: Traffic, alt: "Traffic Fondue", title: "Traffic Fondue", count: 15 },
  { src: Facebook, alt: "Facebook", title: "Facebook", count: 12 },
  { src: GECC, alt: "GECC", title: "ศูนย์ราชการสะดวก", count: 0 },
  { src: WWW, alt: "WWW", title: "สนง.ปลด สำนักนายกฯ", count: 8 },
  { src: WWW2, alt: "WWW2", title: "กรมทางหลวงชนบท", count: 0 },
  { src: WWW3, alt: "WWW3", title: "กระทรวงคมนาคม", count: 0 },
  { src: Book, alt: "Book", title: "หนังสือภายนอก", count: 1 }
];

const Content = () => (
  <div className="max-h-[500px] overflow-y-auto">
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
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

const Overall = (props) => {
  const { open, setOpen } = props;

  return (
    <Modal
      title="เรื่องร้องเรียนรวมทั้งหมด"
      open={open}
      destroyOnClose
      centered
      onCancel={() => setOpen({ open: false })}
      width={1000}
      // height={500}
      footer={false}
    >
      <main className="my-5">
        <Content />
      </main>
    </Modal>
  );
};

export default React.memo(Overall);
