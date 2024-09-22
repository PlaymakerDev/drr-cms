import React from "react";
import { Typography, Col, Row } from "antd";
import Image from "next/image";
import Hotline from "@/public/images/Hotline.svg";
import Traffic from "@/public/images/Traffic.svg";
import Facebook from "@/public/images/Facebook.svg";
import { ComplaintCurrentChart } from "../../chart";
import { useRouter } from "next/router";

const ContentComplaintCurrent = (props) => {
  const { data } = props;
  const router = useRouter();

  // ต้องบอกพี่โต๊ดยังไงถ้าอยากให้เขาส่งรูปมาให้ด้วย 
  const mock_data = [  
    {
      image: Hotline,
      label: "🟢 สายด่วน 1146",
      count: 200,
    },
    {
      image: Traffic,
      label: "🟠 Traffic Fondue",
      count: 15,
    },
    {
      image: Facebook,
      label: "🔵 Facebook",
      count: 12,
    },
  ];
  // ต่างกันยังไงไม่เข้าใจ
  console.log("=222", data.data);
  console.log("=223", [...data.data]);

  return (
    <>
      <section className="flex justify-between items-center">
        <Typography.Text className="!m-0 text-xl font-bold">
          เรื่องร้องเรียนร้องทุกข์ ภายในวันนี้
        </Typography.Text>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => router.push("/admin/complaint-statistic")}
        >
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <Row gutter={[16, 16]} className="!w-full !h-full">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={6}>
          <section>
            <ComplaintCurrentChart data={data} />
          </section>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={18}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Typography.Text>แหล่งที่มาของข้อมูล</Typography.Text>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="!w-full !h-full">
            {[...data.data] 
              .sort((a, b) => b.source_type_count - a.source_type_count)
              .map(({ image, source_name, source_type_count }, index) => (
                <Col key={index} xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
                  <div className="flex flex-col space-y-2 items-center">
                    {/* <Image src={image} width={80} height={80} alt={source_name} /> */}
                    <Typography.Text className="text-lg font-bold">
                      {source_name}
                    </Typography.Text>
                    <section className="flex items-end space-x-1">
                      <Typography.Text className="text-4xl font-bold">
                        {source_type_count}
                      </Typography.Text>
                      <Typography.Text className="text-lg font-bold">
                        รายการ
                      </Typography.Text>
                    </section>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default React.memo(ContentComplaintCurrent);
