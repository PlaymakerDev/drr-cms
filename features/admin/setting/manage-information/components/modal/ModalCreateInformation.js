import React, { useCallback, useMemo, useRef } from 'react'
import { Col, Modal, Row, Typography } from 'antd'
import { useForm, Form, Field } from '@/components/form'
import styles from '@/features/admin/setting/manage-information/style/manage-information.module.css'
import UploadImage from '@/components/icon/UploadImage'
// ICON LIST
import Hotline from '@/public/images/Hotline.svg'
import Traffic from '@/public/images/Traffic.svg'
import Facebook from '@/public/images/Facebook.svg'
import GECC from '@/public/images/GECC.svg'
import WWW from '@/public/images/WWW.svg'
import WWW2 from '@/public/images/WWW2.svg'
import Book from '@/public/images/Book.svg'
import WWW3 from '@/public/images/WWW3.svg'

const Content = (props) => {
  const { info, initFileList, refSubmit } = props;

  const form = useForm({
    initialValues: {
      file: initFileList || [],
      complaint_type: info?.name || ''
    },
    rules: {}
  })

  const { errors } = form

  const buildValue = useCallback((values, next) => {
    next(values)
  }, [])

  const handlerSubmit = useCallback((values, next) => {
    next(values)
  }, [])

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <section id='article'>
            <Field.Upload2
              name='file'
              maxCount={1}
              accept="image/png, image/jpeg"
              listType='picture-card'
              maxSizeLimit={10000000}
              hideRequired={!errors.file}
              beforeUpload={(file) => {
                // DEFAULT VALUES
                const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
                const maxFileSize = 10000000
                // CHECK
                const isListAvailable = allowList.some(item => item === file.type)
                const isLt10 = file.size < maxFileSize
                if (!isListAvailable) {
                  // message.error('Invalid file type')
                  message.error('ประเภทไฟล์ไม่ถูกต้อง')
                }
                if (!isLt10) {
                  // message.error('File size exceed')
                  message.error('ไม่สามารถอัปโหลดไฟล์ได้ ไฟล์ที่อัปโหลดมีขนาดเกิน 3 MB')
                }
                // RETURN UPLOAD.LIST_IGNORE
                return ((isListAvailable && isLt10) || Upload.LIST_IGNORE) || false
              }}
              label='เลือกรูปภาพ'
              description={
                <div className='flex flex-col flex-wrap justify-center'>
                  <Typography.Text className='!text-sm'>รองรับรูปแบบไฟล์ .png .jpeg .jpg ขนาดไม่เกิน 3 MB</Typography.Text>
                  <Typography.Text className='!text-sm'>ขนาดที่แนะนำ 256 x 256 px</Typography.Text>
                </div>
              }
            />
          </section>
        </Col>
        {/* <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <div className={styles.uploadContainer}>
            <UploadImage />
            <label className={styles.label}>
              อัปโหลดอีกครั้ง
            </label>
          </div>
        </Col> */}
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Field.Input
            label='ประเภทเรื่องร้องทุกข์'
            name='complaint_type'
            placeholder='ประเภทเรื่องร้องทุกข์'
          />
        </Col>
      </Row>
      <button type='submit' ref={refSubmit} hidden />
    </Form>
  )
}

const ModalCreateInformation = (props) => {
  const { open, info, setOpen } = props
  // USE REF
  const refSubmit = useRef(null)
  // MAP ICON
  const ICON_LIST = useMemo(() => {
    return {
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
  }, [])

  const initFileList = useMemo(() => {
    if (info?.key) {
      return [
        {
          uid: info?.key,
          name: info?.name,
          url: ICON_LIST[info?.image_src]?.src,
          status: 'done',
        }
      ]
    } else {
      return []
    }
  }, [ICON_LIST, info])

  return (
    <Modal
      title="เพิ่มข้อมูล"
      open={open}
      destroyOnClose
      onCancel={() => setOpen({ open: false, info: {} })}
      width={700}
      okText='บันทึก'
      cancelText='ยกเลิก'
      okButtonProps={{
        htmlType: 'submit',
        type: 'primary',
        size: 'large',
        onClick: () => refSubmit.current.click()
      }}
      cancelButtonProps={{
        htmlType: 'button',
        type: 'text',
        size: 'large'
      }}
    >
      <main className='my-5'>
        <Content
          info={info}
          initFileList={initFileList}
          refSubmit={refSubmit}
        />
      </main>
    </Modal>
  )
}

export default React.memo(ModalCreateInformation)
