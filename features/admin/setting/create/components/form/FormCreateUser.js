import React, { useCallback } from 'react'
import { Field, Form, useForm } from '@/components/form'
import { Row, Col, Button } from 'antd'
import { useRouter } from 'next/router'

const FormCreateUser = (props) => {
  const { } = props
  const router = useRouter()

  const form = useForm({
    username: '',
    prefix: '',
    first_name: '',
    access_rights:''
  })

  const buildValue = useCallback((values, next) => {
    next(values)
  }, [])

  const handlerSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <section>
        <Row gutter={[16, 16]}className='mt-5 mb-2'>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={12}>
            <Field.Input
              label={<span className="!text-primary-color">Username</span>}
              name='username'
              placeholder='Username'
            />
          </Col>
        </Row>
      </section>
        <Row gutter={[16, 16]} className="items-start mb-40">
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={12}>
            <Field.Select
              label={<span className="!text-primary-color">คำนำหน้า</span>}
              name='prefix'
              placeholder='คำนำหน้า'
            />
          </Col>
          <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={12}>
            <Field.Input
              label={<span className="!text-primary-color">ชื่อ-นามสกุล</span>}
              name='first_name'
              placeholder='ชื่อ-นามสกุล'
            />
          </Col>
          <Col xs={24} sm={24} md={16} lg={16} xl={16} xxl={24}>
            <Field.Select
              label={<span className="!text-primary-color">สิทธิ์การเข้าใช้งาน</span>}
              name='access_rights'
              placeholder='สิทธิ์การเข้าใช้งาน'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
        </Row>
      <section className='block sm:flex sm:justify-end sm:items-center sm:gap-3'>
        <Button
          type='text'
          htmlType='submit'
          size='large'
          className='!w-full lg:!w-auto !text-[#ffffff]'
          onClick={() => router.back()}
        >
          ยกเลิก
        </Button>
        <Button
          type='primary'
          htmlType='submit'
          size='large'
          className='!w-full lg:!w-auto'
        >
          บันทึก
        </Button>
      </section>
    </Form>
  )
}

export default React.memo(FormCreateUser)
