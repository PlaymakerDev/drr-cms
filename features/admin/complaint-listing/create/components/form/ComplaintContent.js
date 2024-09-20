import React, { useState } from 'react'
import { Col, Row, Typography, Image, Upload } from 'antd'
import { UploadOutlined, FileTwoTone } from '@ant-design/icons';
import { Field } from '@/components/form'
import { PlusOutlined, StarOutlined } from '@ant-design/icons';
import styles from '@/features/admin/complaint-listing/create/style/create.module.css'



const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const ComplaintContent = (props) => {
  const { values, errors } = props
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    // {
    //   uid: '',
    //   percent: 50,
    //   name: 'เอกสารร้องทุกข์',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },

    // {
    //   uid: ' string',
    //   percent: 'number',
    //   name: 'string',
    //   status: 'error',
    //   url: ''
    // }
  ])



  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const beforeUpload = (file) => {
    const isLt10M = file.size < 10 * 1024 * 1024;
    if (!isLt10M) {
      message.error('File must be smaller than 10MB!');
    }
    return isLt10M;
  };

  const uploadButton = (
    <>
      <button className={styles.fixedUploadBtn}
        style={{
          border: 0,
          background: 'none',
          cursor: 'pointer'
        }}
        type="button"
      >
        <UploadOutlined style={{ color: 'white', fontSize: '30px' }} />
        <div
          style={{
            marginTop: 8,
            color: 'white'
          }}
        >
          เลือกไฟล์
        </div>
      </button>
    </>
  );





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
            <section
              className='mt-5'
              style={{
                flexDirection: 'row-reverse', // Corrected camelCase for inline style
                justifyContent: 'flex-end',
                display: 'flex' // Make sure to set display to flex for flexbox properties to work
              }}>
            {/* <Field.Upload
                name='complaint_file'
                maxCount={5}
                accept="image/png, image/jpeg, application/pdf"
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
              /> */}
            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
              // style={{ width: '100%', display: 'flex', justifyContent: 'space-around' }}
              className={`w-full flex flex-col-reverse cust_upload_list ${styles.uploadList} `}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>
            {/* {previewImage && (
              <Image
                // wrapperStyle={{
                //   display: 'none',
                // }}
                preview={{
                  // visible: previewOpen,
                  // onVisibleChange: (visible) => setPreviewOpen(visible),
                  // afterOpenChange: (visible) => !visible && setPreviewImage(''),
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                }}
                src={previewImage}
                style={{ display: 'none' }}
                alt='previewImage'
              />


            )} */}
          </section>
        </Col>
      </Row>
    </section>
    </div >
  )
}

export default React.memo(ComplaintContent)
