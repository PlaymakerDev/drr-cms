import React from "react";
import { Table } from "antd";
import { FileTextOutlined, FileProtectOutlined } from "@ant-design/icons";

const TableReport = (props) => {
  const { } = props;

  const data = [
    {
      month: "มกราคม 2567",
      terminate: "250",
      in_progress: "412  ",
      report: true,
      summary: true,
    },
    {
      month: "กุมภาพันธ์ 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: true,
      summary: true,
    },
    {
      month: "มีนาคม 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: true,
      summary: true,
    },
    {
      month: "เมษายน 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: true,
      summary: true,
    },
    {
      month: "พฤษภาคม 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: true,
      summary: true,
    },
    {
      month: "มิถุนายน 2567",
      terminate: "xxx",
      in_progress: "xxx",
      report: true,
      summary: true,
    },
  ];
  const columns = [
    {
      title: "เดือน/ปี",
      key: "month",
      dataIndex: "month",
      width: 150,
      align: 'center',
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      },
    },
    {
      title: "ยุติ(รายการ)",
      key: "terminate",
      dataIndex: "terminate",
      width: 200,
      align: 'center',
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      },
    },
    {
      title: "กำลังดำเนินการ(รายการ) ",
      key: "in_progress",
      dataIndex: "in_progress",
      width: 200,
      align: 'center',
      render: (item) => {
        if (item) {
          return item
        }
        return '-'
      },
    },
    {
      title: "รายงานอธิบดี",
      key: "report",
      dataIndex: "report",
      width: 200,
      align: 'center',
      render: (item) => {
        if (item) {
          return (
            <FileProtectOutlined
              className='!cursor-pointer'
            />
          )
        }
        return '-'
      },
    },
    {
      title: "สรุปรายงาน",
      key: "summary",
      dataIndex: "summary",
      width: 100,
      align: 'center',
      render: (item) => {
        if (item) {
          return (
            <FileTextOutlined
              className='!cursor-pointer'
            />
          )
        }
        return '-'
      },
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data || []}
      // loading={loading}
      pagination={{
        defaultCurrent: 1,
        defaultPageSize: 100,
        // current: page,
        // pageSize: perPage,
        // total: Number(total) || 0,
        // onChange: onChange,
        showSizeChanger: false,
        // position: ['bottomCenter']
      }}
      scroll={{ x: 1600 }}
    />
  );
};

export default React.memo(TableReport);
