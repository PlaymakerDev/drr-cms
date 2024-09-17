import React from 'react'
import { Col, Row, Typography } from 'antd'
import { Field } from '@/components/form'

const ComplaintContent = (props) => {
  const {values, errors } = props

  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>เนื้อหาเรื่องร้องเรียน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">หมวดหมู่</Typography.Text>}
              name='category'
              placeholder='หมวดหมู่'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">ประเภทเรื่องร้องทุกข์</Typography.Text>}
              name='complaint_type'
              placeholder='ประเภทเรื่องร้องทุกข์'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">จังหวัด</Typography.Text>}
              name='province'
              placeholder='จังหวัด'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">อำเภอ</Typography.Text>}
              name='district'
              placeholder='อำเภอ'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">ตำบล</Typography.Text>}
              name='sub_district'
              placeholder='ตำบล'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">สายทาง</Typography.Text>}
              name='way'
              placeholder='สายทาง'
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=100.7657%2C13.7162%2C100.7913%2C13.7458&amp;layer=mapnik"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              className="rounded-3xl"
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Input
                  label={<Typography.Text className="!text-primary-color">ละติจูด</Typography.Text>}
                  name='latitude'
                  placeholder='ละติจูด'
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Input
                  label={<Typography.Text className="!text-primary-color">ลองติจูด</Typography.Text>}
                  name='longitude'
                  placeholder='ลองติจูด'
                />
              </Col>
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Field.TextArea
                  label={<Typography.Text className="!text-primary-color">บริเวณ</Typography.Text>}
                  name='locale'
                  placeholder='บริเวณ'
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
                <Field.Select
                  label={<Typography.Text className="!text-primary-color">แจ้งสำนักกอง</Typography.Text>}
                  name='report_department'
                  placeholder='แจ้งสำนักกอง'
                  optKeys={['value', 'label']}
                  options={[]}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Input
                  label={<Typography.Text className="!text-primary-color">เลขที่เอกสาร</Typography.Text>}
                  name='document_number'
                  placeholder='เลขที่เอกสาร'
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <section>
              <Typography.Title level={5} className='!m-0 !text-primary-color'>ไฟล์ประกอบการร้องเรียน</Typography.Title>
              <Typography.Text className='!text-[#FFFFFF80]'>เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
            </section>
            <section className='mt-5'>
              <Field.Upload
                name='complaint_file'
                maxCount={10}
                accept="image/png, image/jpeg"
                listType='picture-card'
                maxSizeLimit={10000000}
                hideRequired={!errors.complaint_file}
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

export default React.memo(ComplaintContent)
