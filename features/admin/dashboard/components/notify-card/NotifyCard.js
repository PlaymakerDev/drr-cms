import React, { useMemo } from "react";
import { Avatar, Badge, Typography, ConfigProvider } from "antd";
import { BellFilled } from "@ant-design/icons";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  

const NotifyCard = (props) => {
  const { data } = props;

  const renderCard = useMemo(() => {
    if (!data || data.length === 0) {
      return (
        <div className="text-center mt-24">
          <Typography.Text>ไม่มีข้อมูล</Typography.Text>
        </div>
      );
    }

    const newData = data.map((item, index) => {
      return (
        <div
          className="container bg-[#5B5B5B30] rounded-md px-5 py-2 mt-4"
          key={index}
        >
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <Avatar
                icon={<BellFilled />}
                className="!flex !justify-center !items-center !bg-black"
              />
              <div className="flex flex-col">
                <Typography.Title level={5} className="!m-0">
                  {item.complaint_type_name || "ไม่มีข้อมูล"}
                </Typography.Title>
                <ConfigProvider
                  theme={{
                    components: {
                      Badge: {
                        colorText: "gray",
                      },
                    },
                  }}
                >
                  <Badge
                    color="red"
                    text={item.source_type_name || "ไม่มีข้อมูล"}
                  />
                </ConfigProvider>
              </div>
            </div>
            <div>
              {dayjs(item.date_received).format("DD MMMM BBBB HH:mm")}
            </div>
          </div>
        </div>
      );
    });

    return newData;
  }, [data]);

  return <div>{renderCard}</div>;
};

export default React.memo(NotifyCard);
