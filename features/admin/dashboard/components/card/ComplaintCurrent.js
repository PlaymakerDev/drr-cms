import { Card, Typography, Progress } from "antd";
import Image from 'next/image';
import React from "react";
import Traffic from '@/public/images/Traffic.svg'


const ComplaintCurrent = (props) => {
  const {} = props;

  return (
    <Card >
      <section className="flex justify-between items-center">
        <Typography.Title level={5} className="!m-0">
          เรื่องร้องเรียนร้องทุกข์ ภายในวันนี้
        </Typography.Title>
        <Typography.Text underline className="!cursor-pointer">
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <div className="flex items-center justify-around">
        <section className="">
          <Progress type="circle" percent={100} format={() => "ทั้งหมด 312"} />
        </section>
        <section className="space-y-3">
          <Typography.Title level={5} className="!m-0">
            แหล่งที่มาของข้อมูล
          </Typography.Title>
          <figure className="flex space-x-20"> 
              <div className="flex flex-col space-y-2">
                  <Image
                    src={Traffic}
                    alt='dpt-logo'
                    width={80}
                    height={80}
                  />
                <Typography.Text className="text-lg font-bold">🟢 สายด่วน 1146</Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">286</Typography.Text>
                  <Typography.Text className="text-lg font-bold ">รายการ</Typography.Text>
                </section>
              </div>
              <div className="flex flex-col space-y-2">
                  <Image
                    src={Traffic}
                    alt='dpt-logo'
                    width={80}
                    height={80}
                  />
                <Typography.Text className="text-lg font-bold">🟠 Traffic Fondue</Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">15</Typography.Text>
                  <Typography.Text className="text-lg font-bold ">รายการ</Typography.Text>
                </section>
              </div>
              <div className="flex flex-col space-y-2">
                  <Image
                    src={Traffic}
                    alt='dpt-logo'
                    width={80}
                    height={80}
                  />
                <Typography.Text className="text-lg font-bold">🔵 Facebook</Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">12</Typography.Text>
                  <Typography.Text className="text-lg font-bold ">รายการ</Typography.Text>
                </section>
              </div>        
          </figure>
        </section>
      </div>
    </Card>
  );
};

export default React.memo(ComplaintCurrent);
