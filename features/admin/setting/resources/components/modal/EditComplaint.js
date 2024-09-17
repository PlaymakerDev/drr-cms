import React, { useState } from "react";
import { Button, Typography, Modal, message, Upload, Input } from "antd";
import { UploadOutlined, PlusOutlined, ExclamationCircleOutlined } from "@ant-design/icons";
const { Dragger } = Upload;
import { EditIcon } from "@/components/icon";
import Image from "next/image";
import Hotline from '@/public/images/Hotline.svg'
import Traffic from '@/public/images/Traffic.svg'
import Facebook from '@/public/images/Facebook.svg'
import GECC from '@/public/images/GECC.svg'
import WWW from '@/public/images/WWW.svg'
import WWW2 from '@/public/images/WWW2.svg'
import Book from '@/public/images/Book.svg'
import WWW3 from '@/public/images/WWW3.svg'



const EditComplaint = ({ icon, locate }) => {

  const iconMap = {
    'Hotline': Hotline,
    'Traffic': Traffic,
    'Facebook': Facebook,
    'GECC': GECC,
    'WWW': WWW,
    'WWW2': WWW2,
    'Book': Book,
    'WWW3': WWW3,
    // Add other icons here...
  };

  const [fileUploaded, setFileUploaded] = useState(false);
  const ReUpload = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleVisible = () => {
    setIsModalVisible(true)
  }
  const handleOnOk = () => {
    setIsModalVisible(false)
    ConfirmAddModal()
  }
  const handleOnCancle = () => {
    setIsModalVisible(false)
  }
  const [modal, contextHolder] = Modal.useModal();

  const ConfirmAddModal = () => {
    modal.confirm({
      title: 'ยืนยันการแก้ไขข้อมูล',
      icon: <ExclamationCircleOutlined />,
      content: 'ท่านต้องการแก้ไขข้อมูลแหล่งที่มาใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk() {
        message.success("บันทึกข้อมูลสำเร็จ")
      },
      onCancel() {
        message.error("บันทึกข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
      }
    });
  };

  return (
    <>
      <EditIcon
        className='!cursor-pointer'
        onClick={handleVisible}
      />
      
      <Modal
        title="เพิ่มข้อมูล"
        open={isModalVisible}
        onOk={handleOnOk}
        onCancel={handleOnCancle}
        footer={[
          <Button key="cancle" onClick={handleOnCancle}>
            ยกเลิก
          </Button>,
          <Button key="submit" type="primary" onClick={handleOnOk}>
            ตกลง
          </Button>,
        ]}
      >
        <Dragger disabled={true}>
          {icon && (
            <div className="flex item-center justify-center">
              <Image src={iconMap[icon]} alt="icon" width={150} height={150} />
            </div>
          )}
        </Dragger>
        <div className="!w-full flex justify-end ">
          <Upload {...ReUpload}>
            <Typography.Title level={5} className="!mt-4 !text-end ">
              <UploadOutlined /> อัปโหลดอีกครั้ง
            </Typography.Title>
          </Upload>
        </div>
        <Typography.Title level={5} >ประเภทเรื่องร้องทุกข์</Typography.Title>
        <Input id="type_complaint" name="type_complaint" className="py-2 mb-16" value={locate} />
      </Modal>

      {contextHolder}
    </>
  )
}

export default EditComplaint