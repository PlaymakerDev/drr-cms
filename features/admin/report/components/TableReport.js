import React, { useCallback } from "react";
import { Spin, Table } from "antd";
import { FileTextOutlined, FileProtectOutlined } from "@ant-design/icons";
// import { useRouter } from "next/router";
import dayjs from "dayjs";
// import 'dayjs/locale/th'
import styles from '@/features/admin/report/styles/TableReport.module.css'

const TableReport = (props) => {
  const { data, loading, page, perPage, total, onChange, refreshContent, loadFileDirector, loadFileSummary, downloadFileDirector, downloadFileSummary, loadFileIndex, setLoadFileIndex } = props;

  const columns = [
    {
      title: "เดือน/ปี",
      key: "year_month",
      dataIndex: "year_month",
      width: 150,
      align: 'center',
      render: (item) => {
        if (item) {
          return dayjs(item, 'YYYY-MM').locale('th').format('MMMM BBBB')
        }
        return '-'
      },
    },
    {
      title: "รับเรื่อง (รายการ) ",
      key: "status_1",
      dataIndex: "status_1",
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
      title: "กำลังดำเนินการ (รายการ) ",
      key: "status_2",
      dataIndex: "status_2",
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
      title: "ยุติ (รายการ)",
      key: "status_3",
      dataIndex: "status_3",
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
      render: (item, record, index) => {
        if (!loadFileDirector) {
          return (
            <FileProtectOutlined
              className='!cursor-pointer !text-2xl'
              onClick={() => {
                downloadFileDirector(record)
                setLoadFileIndex(index)
              }}
            // onClick={() => router.push(`/admin/complaint-listing/update/${record?.cid}`)}
            />
          )
        } else {
          if (index == loadFileIndex) {
            return <Spin spinning={true} />
          } else {
            return (
              <FileProtectOutlined
                className='!cursor-pointer !text-2xl'
                onClick={() => downloadFileDirector(record)}
              // onClick={() => router.push(`/admin/complaint-listing/update/${record?.cid}`)}
              />
            )
          }

        }
      },
    },
    {
      title: "สรุปรายงาน",
      key: "summary",
      dataIndex: "summary",
      width: 100,
      align: 'center',
      render: (item, record,index) => {
        if (!loadFileSummary) {
          return (
            <FileTextOutlined
              className='!cursor-pointer !text-2xl'
              onClick={() => {
                downloadFileSummary(record)
                setLoadFileIndex(index)
              }}
            // onClick={() => router.push(`/admin/complaint-listing/update/${record?.cid}`)}
            />
          )
        } else {
          if (index == loadFileIndex) {
            return <Spin spinning={true} />
          } else {
            return (
              <FileTextOutlined
                className='!cursor-pointer !text-2xl'
                onClick={() => downloadFileDirector(record)}
              // onClick={() => router.push(`/admin/complaint-listing/update/${record?.cid}`)}
              />
            )
          }
        }
      },
    },
  ];

  return (
    <div >
      <Table
        dataSource={data}
        columns={columns}
        loading={loading}
        pagination={{
          defaultCurrent: 1,
          defaultPageSize: 10,
          current: page,
          pageSize: perPage,
          total: Number(total) || 0,
          onChange: onChange,
          showSizeChanger: false,
          position: ['bottomCenter']
          // defaultPageSize: 10,
          // showSizeChanger: true,
        }}
        className={styles.customTableRrow}
      />
    </div>
  );
};

export default React.memo(TableReport);
