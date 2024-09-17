import React, { useState } from "react";
import { Button, Typography, Modal, message, Upload, Input } from "antd";
import { UploadOutlined, PlusOutlined, CheckCircleOutlined } from "@ant-design/icons";
const { Dragger } = Upload;

const AddComplaint = () => {
  const [fileUploaded, setFileUploaded] = useState(false);
  const uploadSetting = {
    name: 'file',
    multiple: false,
    action: '',
    beforeUpload: (file) => {
      if (fileUploaded) {
        message.error('คุณได้อัพโหลดไฟล์แล้ว');
        return Upload.LIST_IGNORE;
      }
      return true;
    },
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        setFileUploaded(true);
      }
    },
    onRemove: () => {
      setFileUploaded(false);
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
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
      title: 'ยืนยันการบันทึกข้อมูล ?',
      icon: <CheckCircleOutlined style={{ color: '#52C41A' }} />,
      content: 'ท่านตัองการเพิ่มข้อมูลแหล่งที่มาใช่หรือไม่',
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk() {
        message.success("เพิ่มข้อมูลสำเร็จ")
      },
      onCancel() {
        message.error("เพิ่มข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง")
      }
    });
  };
  return (
    <>
      <Button
        type='primary'
        size='large'
        icon={<PlusOutlined />}
        className='!w-full lg:!w-auto xl:!w-auto 2xl:!w-auto !bg-custom-blue'
        onClick={handleVisible}
      >
        เพิ่มแหล่งที่มาข้อมูล
      </Button>
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
        <Dragger {...uploadSetting}>
          <Typography.Title level={1} className="!m-0 !p-0 !mt-4"><UploadOutlined /></Typography.Title>
          <Typography.Title level={5} className="!m-0 !p-0 !mb-4">เพิ่มรูปภาพ</Typography.Title>
          <Typography.Text>รองรับรูปภาพไฟล์ .png, .jpeg, .jpg ขนาดไม่เกิน 3 MB</Typography.Text>
          <br />
          <Typography.Text>ขนาดรูปที่แนะนำ 256x256 px</Typography.Text>
        </Dragger>
        <Typography.Title level={5} className="mt-4">ประเภทเรื่องร้องทุกข์</Typography.Title>
        <Input id="type_complaint" name="type_complaint" className="py-2 mb-16" />
      </Modal>

      {contextHolder}
    </>
  )
}

export default AddComplaint