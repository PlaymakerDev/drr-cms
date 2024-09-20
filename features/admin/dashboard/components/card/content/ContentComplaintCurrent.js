import React from 'react'
import { Typography, Col, Row } from "antd";
import Image from "next/image";
import Hotline from "@/public/images/Hotline.svg";
import Traffic from "@/public/images/Traffic.svg";
import Facebook from "@/public/images/Facebook.svg";
import { ComplaintCurrentChart } from "../../chart";
import { useRouter } from "next/router";

const ContentComplaintCurrent = (props) => {
  const { data } = props
  const router = useRouter()

  return (
    <>
      <section className="flex justify-between items-center">
        <Typography.Text className="!m-0 text-xl font-bold">
          เรื่องร้องเรียนร้องทุกข์ ภายในวันนี้
        </Typography.Text>
        <Typography.Text underline className="!cursor-pointer" onClick={() => router.push("/admin/complaint-statistic")}>
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <Row gutter={[16, 16]} className="!w-full !h-full">
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={6}>
          <section>
            <ComplaintCurrentChart />
          </section>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={18}>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Typography.Text>แหล่งที่มาของข้อมูล</Typography.Text>
            </Col>
          </Row>
          <Row gutter={[16, 16]} className="!w-full !h-full">
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <div className="flex flex-col space-y-2 items-center">
                <Image src={Hotline} alt="hotline" width={80} height={80} />
                <Typography.Text className="text-lg font-bold">
                  🟢 สายด่วน 1146
                </Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">
                    286
                  </Typography.Text>
                  <Typography.Text className="text-lg font-bold ">
                    รายการ
                  </Typography.Text>
                </section>
              </div>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <div className="flex flex-col space-y-2 items-center">
                <Image src={Traffic} alt="traffic" width={80} height={80} />
                <Typography.Text className="text-lg font-bold">
                  🟠 Traffic Fondue
                </Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">15</Typography.Text>
                  <Typography.Text className="text-lg font-bold ">
                    รายการ
                  </Typography.Text>
                </section>
              </div>
            </Col>
            <Col xs={24} sm={8} md={8} lg={8} xl={8} xxl={8}>
              <div className="flex flex-col space-y-2 items-center">
                <Image src={Facebook} alt="facebook" width={80} height={80} />
                <Typography.Text className="text-lg font-bold">
                  🔵 Facebook
                </Typography.Text>
                <section className="flex items-end space-x-1">
                  <Typography.Text className="text-4xl font-bold">12</Typography.Text>
                  <Typography.Text className="text-lg font-bold ">
                    รายการ
                  </Typography.Text>
                </section>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  )
}

export default React.memo(ContentComplaintCurrent)
