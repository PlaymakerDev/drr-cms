import React from "react";
import { Table , Space , Typography } from "antd";
import { FileTextOutlined, DeleteOutlined, FileProtectOutlined } from "@ant-design/icons";

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
  ];

  const columns = [
    {
      title: "เดือน/ปี",
      key: "month",
      dataIndex: "month",
      width: 150,
      align:'center',
    },
    {
      title: "ยุติ(รายการ)",
      key: "terminate",
      dataIndex: "terminate",
      width: 200,
      align:'center',
    },
    {
      title: "กำลังดำเนินการ(รายการ) ",
      key: "in_progress",
      dataIndex: "in_progress",
      width: 200,
      align:'center',
    },
    {
      title: "รายงานอธิบดี",
      key: "report",
      dataIndex: "report",
      width: 200,
      align:'center',
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <FileTextOutlined 
              className='!cursor-pointer'
              // onClick={() =>}
            />
          </div>
        )
      }
    },
    {
      title: "สรุปรายงาน",
      key: "summary",
      dataIndex: "summary",
      width: 100,
      align:'center',
      render: () => {
        return (
          <div className='inline-flex flex-wrap items-center gap-5'>
            <FileProtectOutlined
              className='!cursor-pointer'
              // onClick={() =>}
            />
          </div>
        )
      }
    },
  ];

  return (
    <Table
      dataSource={data}
      columns={columns}
      scroll={{ x: 1600 }}
    />
  );
};

export default React.memo(TableReport);
