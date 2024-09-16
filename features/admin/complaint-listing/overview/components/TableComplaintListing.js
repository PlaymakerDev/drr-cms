import React from "react";
import { Table, Space, Typography, ConfigProvider, Badge } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { DeleteIcon, EditIcon } from "@/components/icon";

const TableComplaintListing = (props) => {
  const { } = props;
  const router = useRouter();

  const data = [
    {
      document_number: "",
      notification_date: "12 สิงหาคม 2567",
      data_source: "สายด่วน 1146",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      status: "รับเรื่อง"
    },
    {
      document_number: "คค.1246/2567",
      notification_date: "11 สิงหาคม 2567",
      data_source: "Traffic Fondue",
      category: "ร้องเรียน",
      type: "ไฟฟ้าส่องสว่างดับ/ชำรุด/ติดตั้ง",
      responsible_agency: "ขทช.xxx",
      status: "กำลังดำเนินเรื่อง"
    },
    {
      document_number: "คค.1245/2567",
      notification_date: "10 สิงหาคม 2567",
      data_source: "กรมทางหลวงชนบท",
      category: "ร้องเรียน",
      type: "ถนนชำรุด",
      responsible_agency: "ขทช.xxx",
      status: "ยุติ"
    },
    {
      document_number: "",
      notification_date: "12 สิงหาคม 2567",
      data_source: "Facebook",
      category: "ร้องเรียน",
      type: "วัชพืช/ต้นไม้/ขยะ",
      responsible_agency: "ขทช.xxx",
      status: "รับเรื่อง"
    },
    {
      document_number: "คค.1243/2567",
      notification_date: "11 สิงหาคม 2567",
      data_source: "Facebook",
      category: "ร้องเรียน",
      type: "ไฟฟ้าส่องสว่าง",
      responsible_agency: "ขทช.xxx",
      status: "กำลังดำเนินเรื่อง"
    },
    {
      document_number: "คค.1242/2567",
      notification_date: "10 สิงหาคม 2567",
      data_source: "กรมทางหลวงชนบท",
      category: "ขอรับบริการ",
      type: "ไฟฟ้าส่องสว่าง",
      responsible_agency: "ขทช.xxx",
      status: "ยุติ"
    },
  ];

  const columns = [
    {
      title: "เลขที่เอกสาร",
      key: "document_number",
      dataIndex: "document_number",
      width: 150,
      onHeaderCell: () => {
        return {
          style: {
            height: '40px',
            lineHeight: '40px',
          },
        };
      },  
      render: (document_number) => (
        <Typography.Text
        underline
        onClick={() => router.push('')}
        style={{ height: '60px', lineHeight: '60px' }}
        >
          {document_number}
        </Typography.Text>
      ),
    },
    {
      title: "วันที่แจ้ง",
      key: "notification_date",
      dataIndex: "notification_date",
      width: 200,
      render: (notification_date) => (
        <div style={{ height: '50px', lineHeight: '50px' }}> 
          {notification_date}
        </div>
      ),
    },
    {
      title: "แหล่งที่มาข้อมูล",
      key: "data_source",
      dataIndex: "data_source",
      width: 200,
      render: (data_source) => (
        <div style={{ height: '50px', lineHeight: '50px' }}>
          {data_source}
        </div>
      ),
    },
    {
      title: "หมวดหมู่",
      key: "category",
      dataIndex: "category",
      width: 200,
      height: 200,
    },
    {
      title: "ประเภท",
      key: "type",
      dataIndex: "type",
      width: 130,
      height: 200,
    },
    {
      title: "หน่วยงานผู้รับผิดชอบ",
      key: "responsible_agency",
      dataIndex: "responsible_agency",
      width: 200,
      height: 200,
      render: (item, record) => {
        return (
          <Space direction="vertical">
            <Typography.Text>{item}</Typography.Text>
            <Typography.Text>{record.Province}</Typography.Text>
          </Space>
        );
      },
    },
    {
      title: "สถานะ",
      key: "status",
      dataIndex: "status",
      width: 200,
      height: 200,
      render: (status) => {
        let color = "";
        if (status === "รับเรื่อง") color = "#ffc90a";
        else if (status === "กำลังดำเนินเรื่อง") color = "#0075E9";
        else if (status === "ยุติ") color = "#43BE6D";

        return <Badge color={color} text={status} />;
      },
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
            
            {/* <EditFilled
              className='!cursor-pointer'

              onClick={() => router.push('/admin/complaint-listing/create')}
            /> */}
            <EditIcon
            className='!cursor-pointer'
            onClick={() => router.push('/admin/complaint-listing/create')}
            />
            <DeleteIcon/>
            {/* onClick = {} */}
          </div>
        );
      },
    },
  ];

  const themeConfig = {
    token: {
      colorPrimary: 'gray',
      colorTextBase: '#FFFFFF',
      colorBgContainer: '#030918',
      colorBorderSecondary: '#989898',
      colorBgTableHeader: '#26344b',
      colorTextTableHeader: '#FFFFFF',
      headerSplitColor: 'transparent',
      bodySortBg: 'transparent',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <Table
        dataSource={data}
        columns={columns}
        scroll={{ x: 1600}}
      />
    </ConfigProvider>
  );
};

export default React.memo(TableComplaintListing);
