import React, { useCallback, useMemo, useRef } from 'react'
import { Col, message, Modal, Row, Typography } from 'antd'
import { useForm, Form, Field } from '@/components/form'
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
import usePostAPI from '@/utils/hooks/api/usePostAPI'
import usePutAPI from '@/utils/hooks/api/usePutAPI'
import usePatchAPI from '@/utils/hooks/api/usePatchAPI'
import config from '@/config'

const Content = (props) => {
  const { edit, info, initFileList, refSubmit, setOpen, onReload } = props;

  const [apiPost, loadingPost] = usePostAPI('overlay')

  const form = useForm({
    initialValues: {
      file: edit ? initFileList : [],
      mas_name: edit ? info?.mas_name : ''
    },
    rules: {
      file: {
        required: 'required_file'
      }
    }
  })

  const { errors } = form

  const buildValue = useCallback((values, next) => {
    const body = new FormData()
    body.append('mas_name', values.mas_name)
    if (values.file[0]?.originFileObj) {
      body.append('file', values.file[0]?.originFileObj)
    }
    next(body)
  }, [])

  const handleAddSubmit = useCallback(async (values, next) => {
    const response = await apiPost(`/api/v1/source_type/upload`, values, {}, false, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    })

    if (response?.filename) {
      message.success('เพิ่มข้อมูลสำเร็จ')
      setOpen({ open: false, info: {} })
      onReload()
    } else {
      message.error('ไม่สามารถเพิ่มข้อมูลได้')
    }
  }, [apiPost, setOpen, onReload])

  const handleEditSubmit = useCallback(async (values, next) => {
    const response = await apiPost(`/api/v1/source_type/upload/${info?.mas_id}`, values, {}, false, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
    })
    // console.log('response',response)
    if (response?.success) {
      message.success('แก้ไขข้อมูลสำเร็จ')
      setOpen({ open: false, info: {} })
      onReload()
    } else {
      message.error('ไม่สามารถแก้ไขข้อมูลได้')
    }
  }, [apiPost, info?.mas_id, setOpen, onReload])

  return (
    <Form
      form={form}
      handlerSubmit={[buildValue, info?.mas_id ? handleEditSubmit : handleAddSubmit,]}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <section className='large-article-block'>
            <Field.Upload2
              name='file'
              maxCount={1}
              accept="image/png, image/jpeg"
              listType='picture-card'
              maxSizeLimit={10000000}
              hideRequired={!errors.file}
              beforeUpload={(file) => {
                const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
                const maxFileSize = 10000000
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
                return false;
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
        <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
          <Field.Input
            label='แหล่งที่มาข้อมูล'
            name='mas_name'
            placeholder='แหล่งที่มาข้อมูล'
          />
        </Col>
      </Row>
      <button type='submit' ref={refSubmit} hidden />
    </Form>
  )
}

const ModalCreateInformation = (props) => {
  const { open, edit, info, setOpen, onReload } = props
  const refSubmit = useRef(null)

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
    };
  }, [])

  // const initFileList = useMemo(() => {
  //   if (info?.key) {
  //     return [
  //       {
  //         uid: info?.key,
  //         name: info?.name,
  //         url: ICON_LIST[info?.image_src]?.src,
  //         status: 'done',
  //       }
  //     ]
  //   } else {
  //     return []
  //   }
  // }, [ICON_LIST, info])

  const initFileList = useMemo(() => {
    let imgArr = [info]
    const renderImg = imgArr?.map((item, index) => {
      return {
        uid: index + 1,
        name: item.mas_name,
        url: config.source_type_image + '/' + item.logo,
        status: 'done'
      }
    })
    return renderImg || []
  }, [info])

  return (
    <Modal
      title={info?.mas_id ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
      open={open}
      onReload={onReload}
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
          edit={edit}
          info={info}
          initFileList={initFileList}
          refSubmit={refSubmit}
          setOpen={setOpen}
          onReload={onReload}
        />
      </main>
    </Modal>
  )
}

export default React.memo(ModalCreateInformation)

