import React from "react";
import { Table , Space , Typography } from "antd";
import { EditFilled, DeleteOutlined } from "@ant-design/icons";

const TableUsersetting = (props) => {
  const { } = props;

  const data = [
    {
      Username: "adisai_t",
      Fname_Lname: "นายอถิศัย ทองไทย",
      Department: "แขวงทางหลวงชนบท",
      Province: "พังงา",
      Role: "นายช่างโยธาอาวุโส",
      Duty: "หัวหน้าหน่วยชั่งน้ำหนัก",
      Group: "ผู้ใช้งาน"
    },
    {
      Username: "adithep_t",
      Fname_Lname: "นายอดิเทพ ติระมาศวณิช",
      Department: "แขวงทางหลวงชนบท",
      Province: "อุบลราชธาณี",
      Role: "ผู้อำนวยการแขวงทางหลวงชนบท",
      Duty: "อื่นๆ",
      Group: "ผู้ใช้งาน"
    }
  ];

  const columns = [
    {
      title: "Username",
      key: "Username",
      dataIndex: "Username",
      width: 150,
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "Fname_Lname",
      dataIndex: "Fname_Lname",
      width: 200,
    },
    {
      title: "หน่วยงาน",
      key: "Department",
      dataIndex: "Department",
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
      title: "ตำแหน่ง",
      key: "Role",
      dataIndex: "Role",
      width: 200,
    },
    {
      title: "หน้าที่",
      key: "Duty",
      dataIndex: "Duty",
      width: 200,
    },
    {
      title: "กลุ่ม",
      key: "Group",
      dataIndex: "Group",
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
              // onClick={() =>}
            />
            <DeleteOutlined
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

export default React.memo(TableUsersetting);
