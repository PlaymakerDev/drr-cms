import React, { useState } from "react";
import Image from "next/image";
import { Typography } from "antd";
import Chart from "@/public/images/chart.svg";
import { ICON_SOURCE } from "@/utils/constant";
import allinone from "@/public/images/allinone.svg";
import Overall from "./modal/Overall";
import { useRouter } from "next/router";
import config from '@/config'

const INIT_MODAL = { open: false };

const TotalComplaint = (props) => {
  const { data, dateRange, logo } = props;
  const router = useRouter();
  const [openOverall, setOpenOverall] = useState(INIT_MODAL);
  const totalComplaints = data.reduce(
    (total, item) => total + item.source_type_count,
    0
  );

  const sortedData = [...data]
    .sort((a, b) => b.source_type_count - a.source_type_count)
    .slice(0, 8);

  return (
    <div className="flex flex-wrap space-x-4 bg-white rounded-lg !w-full !h-full pb-2 pt-2 mb-2">
      <article className="flex flex-wrap flex-col justify-between p-4">
        <div className="flex flex-wrap">
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
        <div className="flex-1 flex-wrap" />
        <div className="mt-10 mb-2 space-x-1 pt-7">
          <Typography.Text className="text-4xl font-bold">
            {totalComplaints}
          </Typography.Text>
          <Typography.Text className="text-2xl">เรื่อง</Typography.Text>
        </div>
        <div className="flex flex-wrap">
          <Image src={Chart} alt="chart" width={20} height={20} />
          <Typography.Text>จำนวนเรื่องร้องเรียน</Typography.Text>
        </div>
      </article>
      <div className="hidden xl:flex flex-wrap flex-1">
        {sortedData.map((item, index) => {
          const matchedItem = logo?.find(
            (logoItem) => logoItem.masCode === item.mas_code
          );
          return (
            <article
              key={index}
              className="flex-1 flex flex-wrap flex-col items-center pl-2 pr-2 hover:bg-blue-100"
              onClick={() =>
                router.push({
                  pathname: "/admin/complaint-listing/overview",
                  query: {
                    mas_code: item.mas_code,
                    startDate: dateRange[0],
                    endDate: dateRange[1],
                  },
                })
              }
            >
              <Image
                src={
                  matchedItem && matchedItem.logo
                    ? `${config.source_type_image}/${matchedItem.logo}`
                    : ICON_SOURCE[item.mas_code]?.icon || ""
                }
                alt={item.alt}
                width={50}
                height={50}
                className="pt-3"
              />
              <Typography.Text className="text-lg text-center font-bold mb-5 mt-2">
                {ICON_SOURCE[item.mas_code]?.name}
              </Typography.Text>
              <div className="flex-1 flex-wrap" />
              <section className="flex flex-wrap items-end space-x-1 pt-6 pb-3">
                <Typography.Text className="text-4xl font-bold">
                  {item.source_type_count}
                </Typography.Text>
                <Typography.Text className="text-lg font-bold">
                  รายการ
                </Typography.Text>
              </section>
            </article>
          );
        })}
      </div>

      <Overall
        open={openOverall.open}
        setOpen={setOpenOverall}
        iconData={data}
        logo={logo}
      />
    </div>
  );
};

export default React.memo(TotalComplaint);
