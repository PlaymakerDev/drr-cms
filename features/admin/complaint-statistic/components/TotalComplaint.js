import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "antd";
import Hotline from "@/public/images/Hotline.svg";
import Traffic from "@/public/images/Traffic.svg";
import Facebook from "@/public/images/Facebook.svg";
import GECC from "@/public/images/GECC.svg";
import WWW from "@/public/images/WWW.svg";
import WWW2 from "@/public/images/WWW2.svg";
import WWW3 from "@/public/images/WWW3.svg";
import Book from "@/public/images/Book.svg";
import Chart from "@/public/images/Chart.svg";
import allinone from "@/public/images/allinone.svg";
import Overall from "../modal/Overall";

const data = [
  { src: Hotline, alt: "hotline", title: "สายด่วน 1146", count: 286 },
  { src: Traffic, alt: "traffic", title: "Traffic Fondue", count: 15 },
  { src: Facebook, alt: "facebook", title: "Facebook", count: 12 },
  { src: GECC, alt: "gecc", title: "ศูนย์ราชการสะดวก", count: 0 },
  { src: WWW, alt: "www", title: "เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี", count: 8,},
  { src: WWW2, alt: "www2", title: "เว็บไซต์กรมทางหลวงชนบท", count: 0 },
  { src: WWW3, alt: "www3", title: "เว็บไซต์กระทรวงคมนาคม", count: 0 },
  { src: Book, alt: "book", title: "หนังสือภายนอก", count: 1 },
  { src: Book, alt: "book", title: "หนังสือภายนอก", count: 0 },
];

const INIT_MODAL = { open: false };

const TotalComplaint = (props) => {
  const {} = props;

  const [openOverall, setOpenOverall] = useState(INIT_MODAL);

  const sortedData = [...data].sort((a, b) => b.count - a.count).slice(0, 8);

  return (
    <div className="flex flex-wrap space-x-4 bg-white rounded-lg !w-full !h-full">
      <article className="flex flex-warp flex-col justify-between p-4">
        <div className="flex flex-warp">
          <Typography.Text className="text-xl font-bold">
            เรื่องร้องเรียนรวม
          </Typography.Text>
          <Image
            src={allinone}
            alt="hotline"
            width={30}
            height={30}
            className="pl-2"
            onClick={() => setOpenOverall({ open: true })}
          />
        </div>
        <div className="flex-1 flex-warp" />
        <div className="mt-10 mb-2 space-x-1 pt-7">
          <Typography.Text className="text-4xl font-bold">321</Typography.Text>
          <Typography.Text className="text-2xl">เรื่อง</Typography.Text>
        </div>
        <div className="flex flex-warp">
          <Image src={Chart} alt={Chart} width={20} height={20} />
          <Typography.Text>จำนวนเรื่องร้องเรียน</Typography.Text>
        </div>
      </article>
      <div className="hidden xl:flex flex-wrap flex-1">
        {sortedData.map((item, index) => (
          <article
            key={index}
            className="flex-1 flex flex-wrap flex-col items-center hover:bg-gray-100"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={50}
              height={50}
              className="pt-3"
            />
            <Typography.Text className="text-lg font-bold mb-5 mt-2">
              {item.title}
            </Typography.Text>
            <div className="flex-1 flex-warp" />
            <section className="flex flex-warp items-end space-x-1 pt-6 pb-3">
              <Typography.Text className="text-4xl font-bold">
                {item.count}
              </Typography.Text>
              <Typography.Text className="text-lg font-bold">
                รายการ
              </Typography.Text>
            </section>
          </article>
        ))}
      </div>
      <Overall open={openOverall.open} setOpen={setOpenOverall} iconData={data} />
    </div>
  );
};

export default React.memo(TotalComplaint);
