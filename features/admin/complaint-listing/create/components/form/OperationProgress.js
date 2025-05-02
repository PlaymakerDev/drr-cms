import React from 'react'
import { Col, message, Row, Typography } from 'antd'
import { Field } from '@/components/form'
import { FileOutlined, FileTextOutlined } from '@ant-design/icons'

const OperationProgress = (props) => {
  const { values, errors, handlerChange } = props

  const iconRender = (file) => {
    if (file.status === 'done') {
      return <FileTextOutlined style={{ color: 'white' }} />;
    }
    return <FileOutlined style={{ color: 'white' }} />;
  };

  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>ผลการดำเนินงาน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={6}>
            <Field.DatePicker
              label={<Typography.Text className="!text-primary-color">วันที่ยุติ</Typography.Text>}
              name='date_closed'
              placeholder='วันที่ยุติ'
              className="disabled:bg-gray-500 disabled:border-gray-500"
              format={"DD MMMM BBBB HH:mm"}
              showTime
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Field.TextArea
              label={<Typography.Text className="!text-primary-color">คำชี้แจง/ผลปฏิบัติ</Typography.Text>}
              name='explanation_result'
              placeholder='คำชี้แจง/ผลปฏิบัติ'
              className="!h-36"
              showCount
              maxLength={500}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <section>
              <Typography.Title level={5} className='!m-0 !text-primary-color'>ไฟล์ประกอบการดำเนินงาน</Typography.Title>
              <Typography.Text className='!text-[#FFFFFF80]'>เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
            </section>
            <section className='mt-5  small-article-block'>
              <Field.Upload
                name='progress_file'
                // onChange={(n, v) => {
                //   handlerChange((prev) => ({ ...prev, [n]: v?.map((item) => ({ ...item, og_name: item?.name, name: 'เอกสารร้องทุก' })) }))
                // }}
                maxCount={5}
                accept="image/png, image/jpeg, application/pdf"
                listType='picture-card'
                maxSizeLimit={10000000}
                hideRequired={!errors.progress_file}
                beforeUpload={(file) => {
                  // DEFAULT VALUES
                  const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
                  const maxFileSize = 10000000
                  // CHECK
                  const isListAvailable = allowList.includes(file.type)
                  const isLt10 = file.size < maxFileSize
                  if (!isListAvailable) {
                    message.error('ประเภทไฟล์ไม่ถูกต้อง')
                    return Upload.LIST_IGNORE;
                  }
                  if (!isLt10) {
                    message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 10 MB')
                    return Upload.LIST_IGNORE;
                  }
                  // RETURN UPLOAD.LIST_IGNORE
                  return false;
                }}
                iconRender={iconRender} // เพิ่ม iconRender ที่นี่
                label={<Typography.Text className='!text-primary-color'>เลือกไฟล์</Typography.Text>}
              />
            </section>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default React.memo(OperationProgress)
