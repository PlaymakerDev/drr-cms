import React from "react";
import Image from "next/image";
import { Card, Typography } from "antd";
import Hotline from "@/public/images/Hotline.svg";
import Traffic from "@/public/images/Traffic.svg";
import Facebook from "@/public/images/Facebook.svg";
import GECC from "@/public/images/GECC.svg";
import WWW from "@/public/images/WWW.svg";
import WWW2 from "@/public/images/WWW2.svg";
import WWW3 from "@/public/images/WWW3.svg";
import Book from "@/public/images/Book.svg";

const TotalComplaint = (props) => {
  const {} = props;

  return (
      <div className="flex space-x-4 bg-white rounded-lg !w-full !h-full">
        <article className="flex flex-col justify-between flex-1 p-4">
          <Typography.Text className="text-xl font-bold">
            เรื่องร้องเรียนรวม
          </Typography.Text>
          <div className="flex-1" />
          <div className="mt-10 mb-2 space-x-1 pt-7">
            <Typography.Text className="text-4xl font-bold">
              321
            </Typography.Text>
            <Typography.Text className="text-2xl">เรื่อง</Typography.Text>
          </div>
          <Typography.Text>จำนวนเรื่องร้องเรียน</Typography.Text>
        </article>

        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={Hotline} alt="hotline" width={50} height={50} className="pt-3" />
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            สายด่วน 1146
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">
              286
            </Typography.Text>
            <Typography.Text className="text-lg font-bold">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={Traffic} alt="hotline" width={50} height={50} className="pt-3"/>
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            Traffic Fondue
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">15</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={Facebook} alt="hotline" width={50} height={50} className="pt-3" />
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            Facebook
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">12</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={GECC} alt="hotline" width={50} height={50} className="pt-3" />
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            ศูนย์ราชการสะดวก
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">0</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={WWW} alt="hotline" width={50} height={50} className="pt-3"/>
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">8</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={WWW2} alt="hotline" width={50} height={50} className="pt-3" />
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            เว็บไซต์กรมทางหลวงชนบท
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">0</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={WWW3} alt="hotline" width={50} height={50} className="pt-3"/>
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            เว็บไซต์กระทรวงคนนาคม
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">0</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
        <article className="flex-1 flex flex-col items-center hover:bg-gray-100">
          <Image src={Book} alt="hotline" width={50} height={50} className="pt-3"/>
          <Typography.Text className="text-lg font-bold mb-5 mt-2">
            หนังสือภายนอก
          </Typography.Text>
          <div className="flex-1" />
          <section className="flex items-end space-x-1 pt-6 pb-3">
            <Typography.Text className="text-4xl font-bold">1</Typography.Text>
            <Typography.Text className="text-lg font-bold ">
              รายการ
            </Typography.Text>
          </section>
        </article>
      </div>
    // </Card>
  );
};

export default React.memo(TotalComplaint);
