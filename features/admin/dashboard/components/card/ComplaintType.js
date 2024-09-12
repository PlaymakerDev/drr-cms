import React from "react";
import { Card, Typography, Progress } from "antd";
import { ComplaintTypeTotalChart } from "../chart";

const ComplaintType = (props) => {
  const {} = props;

  return (
    <Card>
      <section>
        <Typography.Title level={5} className="!m-0">
          ประเภทเรื่องร้องเรียนร้องทุกข์ ภายในวันนี้
        </Typography.Title>
        <div class="flex items-center justify-center">
          <ComplaintTypeTotalChart />
        </div>
      </section>

      <section className="p-4">
        <Typography.Title level={5} className="!m-0 !mb-1 pb-1">
          TOP 3 ประเภทเรื่องร้องเรียนร้องทุกข์
        </Typography.Title>
        <figure className="flex justify-around items-stretch">
          <div className="flex flex-col items-center flex-1 mx-2">
            <Progress type="circle" percent={50} />
            <Typography.Text className="mt-2 text-center">
              ไฟฟ้าส่องสว่าง/ดับ/ชำรุด/ติดตั้ง
            </Typography.Text>
          </div>
          <div className="flex flex-col items-center flex-1 mx-2">
            <Progress type="circle" percent={25} />
            <Typography.Text className="mt-2 text-center">
              ถนนชำรุด
            </Typography.Text>
          </div>
          <div className="flex flex-col items-center flex-1 mx-2">
            <Progress type="circle" percent={25} />
            <Typography.Text className="mt-2 text-center">
              ป้ายจราจรเสียหาย/ชำรุด/ติดตั้ง
            </Typography.Text>
          </div>
        </figure>
      </section>
    </Card>
  );
};

export default React.memo(ComplaintType);
