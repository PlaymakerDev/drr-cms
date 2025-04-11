import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Progress,
  Badge,
  Space,
  ConfigProvider,
} from "antd";
import { RightDonutChart } from "../chart";

const ContentService = (props) => {
  const { servicedata, colorChartRight, sortServiceLabel, servicestatus } = props;

  const getprogress = servicestatus?.[0]?.status_count

  const getend = servicestatus?.[1]?.status_count

  const dataLabel = sortServiceLabel

  const total = getprogress + getend

  const perscentTotal = (100 / total) * servicestatus?.[0]?.status_count

  return (
    <section>
      <Typography.Text className="text-xl font-bold">หมวดหมู่ : ขอรับบริการ</Typography.Text>
      <div className="space-x-1 pb-3">
        <Typography.Text className="text-3xl font-bold">{total}</Typography.Text>
        <Typography.Text>รายการ</Typography.Text>
      </div>
      <Progress
        showInfo={false}
        percent={perscentTotal}
        success={{
          percent: 0,
          strokeColor: "#0075E9",
        }}
        strokeWidth={15}
        trailColor="#43BE6D"
        // strokeColor="#43BE6D"
      />
      <div className="flex justify-between items-center flex-wrap pt-2 pb-5">
        <Typography.Text className="font-bold">
          🔵 ดำเนินการ ({servicestatus?.[0]?.status_percent || 0}%)
        </Typography.Text>
        <Typography.Text className="font-bold">
          🟢 ยุติ ({servicestatus?.[1]?.status_percent || 0}%)
        </Typography.Text>
      </div>
      <Typography.Text>ประเภทเรื่องขอรับบริการ</Typography.Text>
      <figure className="flex flex-col items-center">
        <RightDonutChart servicedata={servicedata} colorChartRight={colorChartRight} />
        <ConfigProvider
          theme={{
            components: {
              Badge: {
                colorTextHeading: "#000000",
                colorTextDescription: "#000000",
                colorText: "#000000",
              },
            },
          }}
        >
          <Space direction="vertical" className="space-y-2 pt-5">

            {dataLabel.map((item, index) => (
              <Row key={index}>
                <Badge
                  color={colorChartRight[index]}
                  text={item}
                />

              </Row>

            ))}

          </Space>
      </ConfigProvider>
    </figure>
    </section >
  );
};

export default React.memo(ContentService);
