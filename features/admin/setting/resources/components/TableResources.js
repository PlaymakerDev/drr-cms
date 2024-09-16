import React from "react";
import { ConfigProvider, Table } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const TableResources = (props) => {
  const { } = props;

  const data = [
    {
      key: '1',
      icon: Hotline,
      Fname_Lname: "สายด่วน 1146",
    },
    {
      key: '2',
      icon: Traffic,
      Fname_Lname: "Traffic Fondue",
    },
    {
      key: '3',
      icon: Facebook,
      Fname_Lname: "Facebook",
    },
    {
      key: '4',
      icon: GECC,
      Fname_Lname: "ศูนย์ราชการสะดวก",
    },
    {
      key: '5',
      icon: WWW,
      Fname_Lname: "ศูนย์ราชการสะดวก",
    },
    {
      key: '6',
      icon: WWW2,
      Fname_Lname: "เว็ปไซต์สำนักงานปลัด สำนักนายกรัฐมนตรี",
    },
    {
      key: '7',
      icon: Book,
      Fname_Lname: "หนังสือภายนอก",
    },
    {
      key: '8',
      icon: WWW3,
      Fname_Lname: "แหล่งที่มา xxxxx",
    }
  ];

  const columns = [
    {
      title: "",
      key: "icon",
      dataIndex: "icon",
      width: 150,
     
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "Fname_Lname",
      dataIndex: "Fname_Lname",
      width: 200,
    },
    {
      title: '',
      key: 'action',
      dataIndex: 'action',
      align: 'center',
      width: 100,
      render: () => (
        <div className='inline-flex flex-wrap items-center gap-5'>
          <EditFilled className='!cursor-pointer' />
          <DeleteOutlined className='!cursor-pointer !text-[#FF4a4a]' />
        </div>
      )
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

export default React.memo(TableResources);
