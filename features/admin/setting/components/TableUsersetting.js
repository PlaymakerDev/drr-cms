import React from "react";
import { Table , Space , Typography, ConfigProvider } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const TableUsersetting = (props) => {
  const { } = props;

  const data = [
    {
      Username: "adisai_t",
      Fname_Lname: "นายอถิศัย ทองไทย",
      Usage_rights: "ผู้ใช้งาน"
    },
    {
      Username: "adithep_t",
      Fname_Lname: "นายอดิเทพ ติระมาศวณิช",
      Usage_rights: "ผู้ใช้งาน"
    },
    {
      Username: "adithep_t",
      Fname_Lname: "นายอดิเทพ ติระมาศวณิช",
      Usage_rights: "ผู้ใช้งาน"
    },
    {
      Username: "adithep_t",
      Fname_Lname: "นายอดิเทพ ติระมาศวณิช",
      Usage_rights: "ผู้ใช้งาน"
    }
  ];

  const columns = [
    {
      title: "Username",
      key: "Username",
      dataIndex: "Username",
      align: 'center',
      width: 100,
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "Fname_Lname",
      dataIndex: "Fname_Lname",
      width: 150,
    },
    {
      title: "สิทธิการใช้งาน",
      key: "Usage_rights",
      dataIndex: "Usage_rights",
      width: 200,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <EditFilled
              className='!cursor-pointer'
              // onClick={() =>}
            />
            <DeleteOutlined
              className='!cursor-pointer !text-[#FF4a4a]'
              // onClick={() =>}
            />
          </div>
        )
      }
    },
  ];

  const themeConfig = {
    token: {
      colorPrimary: 'gray', // สีหลักที่ใช้ในแอปพลิเคชัน
      colorTextBase: '#FFFFFF', // สีข้อความพื้นฐาน
      colorBgContainer: '#030918', // สีพื้นหลังของคอนเทนเนอร์
      colorBorderSecondary: '#989898', // สีกรอบรอง
      colorBgTableHeader: '#26344b', // สีพื้นหลังของหัวตาราง
      colorTextTableHeader: '#FFFFFF', // สีข้อความของหัวตาราง
      headerSplitColor: 'transparent',
      bodySortBg:'transparent',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Table
      dataSource={data}
      columns={columns}
      scroll={{ x: 1600 }}
      />
    </ConfigProvider>
  );
};

export default React.memo(TableUsersetting);