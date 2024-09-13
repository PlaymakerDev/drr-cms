import React from "react";
import { Table , Space , Typography, ConfigProvider } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const TableComplaintListing = (props) => {
  const { } = props;
  const router = useRouter()

  const data = [
    {
      document_number: "",
      notification_date: "12 สิงหาคม 2567",
      data_source: "สายด่วน 1146  ",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      status: "รับเรื่อง"
    },
    {
      document_number: "คค.1246/2567",
      notification_date: "12 สิงหาคม 2567",
      data_source: "สายด่วน 1146  ",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      status: "รับเรื่อง"
    },
    {
      document_number: "คค.1246/2567",
      notification_date: "12 สิงหาคม 2567",
      data_source: "สายด่วน 1146  ",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      status: "รับเรื่อง"
    },
  ];

  const columns = [
    {
      title: "เลขที่เอกสาร",
      key: "document_number",
      dataIndex: "document_number",
      width: 150,
    },
    {
      title: "วันที่แจ้ง",
      key: "notification_date",
      dataIndex: "notification_date",
      width: 200,
    },
    {
      title: "แหล่งที่มาข้อมูล ",
      key: "data_source",
      dataIndex: "data_source",
      width: 200,
    },
    {
      title: "หมวดหมู่",
      key: "category",
      dataIndex: "category",
      width: 200,
    },
    {
      title: "ประเภท",
      key: "type",
      dataIndex: "type",
      width: 100,
    },
    {
      title: "หน่วยงานผู้รับผิดชอบ",
      key: "responsible_agency",
      dataIndex: "responsible_agency",
      width: 200,
      render: (item, record) => {
        return (
          <Space direction="vertical">
            <Typography.Text>{item}</Typography.Text>
            <Typography.Text>{record.Province}</Typography.Text>
          </Space>
        )
      }
    },
    {
      title: "สถานะ",
      key: "status",
      dataIndex: "status",
      width: 100,
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
              onClick={() => router.push('/admin/complaint-listing/create')}
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

export default React.memo(TableComplaintListing);
