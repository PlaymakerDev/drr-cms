import React from "react";
import { Typography, Col, Row } from "antd";
import Image from "next/image";
import { ICON_SOURCE } from "@/utils/constant";
import { ComplaintCurrentChart } from "../../chart";
import { useRouter } from "next/router";
import config from '@/config'
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  

const ContentComplaintCurrent = (props) => {
  const { data, datacomplain, Detail } = props;
  const router = useRouter();

  return (
    <>
      <section className="flex justify-between items-center">
        <Typography.Text className="!m-0 text-xl font-bold">
          เรื่องร้องเรียนร้องทุกข์ {dayjs().locale('th').format('DD MMMM BBBB')}
        </Typography.Text>
        <Typography.Text
          underline
          className="!cursor-pointer"
          onClick={() => router.push("/admin/complaint-statistic")}
        >
          ดูข้อมูลเพิ่มเติม
        </Typography.Text>
      </section>
      <section className="grid grid-cols-3 items-center">
        <div>
          <ComplaintCurrentChart data={data} datacomplain={datacomplain} />
        </div>
        <div className="col-span-2">
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Typography.Text className="pl-12">
                แหล่งที่มาของข้อมูล
              </Typography.Text>
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Row gutter={[16, 16]}>
                {[...data.data]
                  .sort((a, b) => b.source_type_count - a.source_type_count)
                  .map(({ source_type, source_type_count }, index) => {
  
                    const matchedItem = Detail?.find(
                      (item) => item.masCode === source_type
                    );
                    return (
                      <Col
                        key={index}
                        xs={24}
                        sm={8}
                        md={8}
                        lg={8}
                        xl={8}
                        xxl={8}
                      >
                        <div className="flex flex-col text-center space-y-2 items-center h-full">
                          <Image
                            src={
                              matchedItem && matchedItem.logo
                                ? `${config.source_type_image}/${matchedItem.logo}`
                                : ICON_SOURCE[source_type]?.icon || ""
                            }
                            width={70}
                            height={70}
                            alt="ไม่มีข้อมูล"
                          />
                          <Typography.Text className="text-lg font-bold">
                            {ICON_SOURCE[source_type]?.name || ""}
                          </Typography.Text>

                          <div className="flex-grow"></div>

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
                    );
                  })}
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default React.memo(ContentComplaintCurrent);
