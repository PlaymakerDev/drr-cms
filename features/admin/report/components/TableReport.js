import React from "react";
import { Table, ConfigProvider } from "antd";
import { FileTextOutlined, FileProtectOutlined } from "@ant-design/icons";

const TableReport = (props) => {
  const { } = props;

  const data = [
    {
      month: "มกราคม 2567",
      terminate: "250",
      in_progress: "412  ",
      report: "",
      summary: "FileTextOutlined",
    },
    {
      month: "กุมภาพันธ์ 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: "",
      summary: "FileTextOutlined ",
    },
    {
      month: "มีนาคม 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: "",
      summary: "FileTextOutlined ",
    },
    {
      month: "เมษายน 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: "",
      summary: "FileTextOutlined ",
    },
    {
      month: "พฤษภาคม 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: "",
      summary: "FileTextOutlined ",
    },
    {
      month: "มิถุนายน 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: "",
      summary: "FileTextOutlined ",
    },
  ];
  const columns = [
    {
      title: "เดือน/ปี",
      key: "month",
      dataIndex: "month",
      width: 150,
      align: 'center',
      onHeaderCell: () => {
        return {
          style: {
            height: '50px',
            lineHeight: '50px',
          },
        };
      },
      render: (month) => (
        <div style={{ height: '70px', lineHeight: '70px' }}> 
          {month}
        </div>
      ),
    },
    {
      title: "ยุติ(รายการ)",
      key: "terminate",
      dataIndex: "terminate",
      width: 200,
      align: 'center',
      onHeaderCell: () => {
        return {
          style: {
            height: '50px',
            lineHeight: '50px',
          },
        };
      },
    },
    {
      title: "กำลังดำเนินการ(รายการ) ",
      key: "in_progress",
      dataIndex: "in_progress",
      width: 200,
      align: 'center',
      onHeaderCell: () => {
        return {
          style: {
            height: '50px',
            lineHeight: '50px',
          },
        };
      },
    },
    {
      title: "รายงานอธิบดี",
      key: "report",
      dataIndex: "report",
      width: 200,
      align: 'center',
      onHeaderCell: () => {
        return {
          style: {
            height: '50px',
            lineHeight: '50px',
          },
        };
      },
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <FileProtectOutlined
              className='!cursor-pointer'
              style={{ fontSize: '32px' }}
              />
          </div>
        );
      }
    },
    {
      title: "สรุปรายงาน",
      key: "summary",
      dataIndex: "summary",
      width: 100,
      align: 'center',
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <FileTextOutlined 
              className='!cursor-pointer'
              style={{ fontSize: '32px' }}
            />
          </div>
        );
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
      bodySortBg: 'transparent',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1600 }}
        pagination={{
          position: ['bottomRight'],
          pageSize: 10,
          showTotal: (total, range) => ``,
        }}
      />
    </ConfigProvider>
  );
};

export default React.memo(TableReport);
