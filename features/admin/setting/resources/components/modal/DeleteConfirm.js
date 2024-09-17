import React from 'react';
import { Table, Modal, message } from "antd";
import { DeleteIcon, EditIcon } from "@/components/icon";
import { ExclamationCircleOutlined } from '@ant-design/icons';


const DeleteConfirm = () => {
  const [modal, contextHolder] = Modal.useModal();
  const ConfirmDeleteModal = () => {
    modal.confirm({
      title: 'ยืนยันการลบข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการลบข้อมูลแหล่งที่มาใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk() {
        message.success("ลบข้อมูลสำเร็จ")
      },
      onCancel() {
        message.error("ลบข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
      }
    });
  };
  return (
    <>
      <DeleteIcon className='!cursor-pointer !text-[#FF4a4a]'
        onClick={ConfirmDeleteModal}
      />
      {contextHolder}
    </>
  )
}

export default DeleteConfirm