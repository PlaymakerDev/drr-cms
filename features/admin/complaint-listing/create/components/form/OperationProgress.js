import React from 'react'
import { Col, Row, Typography } from 'antd'
import { Field } from '@/components/form'

const OperationProgress = (props) => {
  const { values, errors } = props

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
              name='end_date'
              placeholder='วันที่ยุติ'
              disabled
              className="disabled:bg-gray-200"
              style={{ backgroundColor: '#f0f0f0' }}
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Field.TextArea
              label={<Typography.Text className="!text-primary-color">คำชี้แจง/ผลปัฏิบัติ</Typography.Text>}
              name='instruction'
              placeholder='คำชี้แจง/ผลปัฏิบัติ'
              disabled
              className="disabled:bg-gray-200"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <section>
              <Typography.Title level={5} className='!m-0 !text-primary-color'>ไฟล์ประกอบการดำเนินงาน</Typography.Title>
              <Typography.Text className='!text-[#FFFFFF80]'>เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
            </section>
            <section className='mt-5'>
              <Field.Upload
                name='operate_file'
                maxCount={5}
                accept="image/png, image/jpeg, application/pdf"
                listType='picture-card'
                maxSizeLimit={10000000}
                hideRequired={!errors.operate_file}
                beforeUpload={(file) => {
                  // DEFAULT VALUES
                  const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
                  const maxFileSize = 10000000
                  // CHECK
                  const isListAvailable = allowList.some(item => item === file.type)
                  const isLt10 = file.size < maxFileSize
                  if (!isListAvailable) {
                    message.error('ประเภทไฟล์ไม่ถูกต้อง')
                  }
                  if (!isLt10) {
                    message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 10 MB')
                  }
                  // RETURN UPLOAD.LIST_IGNORE
                  return ((isListAvailable && isLt10) || Upload.LIST_IGNORE) || false
                }}
                disabled
                // label='เลือกไฟล์'
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
