import React from "react";
import { Table , Space , Typography } from "antd";
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
      width: 150,
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "Fname_Lname",
      dataIndex: "Fname_Lname",
      width: 200,
    },
    {
      title: "สิทธิการใช้งาน",
      key: "Usage_rights",
      dataIndex: "Usage_rights",
      width: 400,
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