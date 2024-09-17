import React, { useCallback } from "react";
import { Table, Modal } from "antd";
import { EditIcon, DeleteIcon } from "@/components/icon";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const TableUser = (props) => {
  const { setOpen } = props;

  const openConfirmDelete = useCallback(() => {
    Modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบข้อมูลผู้ใช้งาน',
      onOk: () => Modal.destroyAll(),
      onCancel: () => Modal.destroyAll(),
    })
  }, [])

  const data = [
    {
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
      permission: "ผู้ใช้งาน",
    },
    {
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
      permission: "ผู้ใช้งาน",

    },
    {
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
      permission: "ผู้ใช้งาน",

    },
    {
      username: "adisai_t",
      name: "นายอดิศัย ทองไทย",
      permission: "ผู้ใช้งาน",

    },
  ];

  const columns = [
    {
      title: "Username",
      key: "username",
      dataIndex: "username",
      width: 200
    },
    {
      title: "ชื่อ-นามสกุล",
      key: "name",
      dataIndex: "name",
      width: 300
    },
    {
      title: "สิทธิการใช้งาน",
      key: "permission",
      dataIndex: "permission",
      width: 500
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
            <EditIcon
              className='!cursor-pointer'
              onClick={() => setOpen({ open: true })}
            />
            <DeleteIcon
              className='!cursor-pointer !text-[#FF4a4a]'
              onClick={() => openConfirmDelete()}
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
      pagination={{
        // position: ['bottomCenter']
      }}
    />
  );
};

export default React.memo(TableUser);
