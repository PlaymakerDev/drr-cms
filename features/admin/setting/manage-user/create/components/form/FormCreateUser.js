import React, { useCallback } from 'react'
import { Field, Form, useForm } from '@/components/form'
import { Row, Col, Button, Typography } from 'antd'
import { useRouter } from 'next/router'

const FormCreateUser = (props) => {
  const { } = props
  const router = useRouter()

  const form = useForm({
    username: '',
    prefix: '',
    name: '',
    permission: '',
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
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>Username</Typography.Text>}
              name='username'
              placeholder='Username'
            />
          </Col>
        </Row>
      </section>
      <section className='mt-3'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>คำนำหน้า</Typography.Text>}
              name='prefix'
              placeholder='คำนำหน้า'
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>ชื่อ-นามสกุล</Typography.Text>}
              name='name'
              placeholder='ชื่อ-นามสกุล'
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Field.Select
              label={<Typography.Text className='!text-primary-color'>สิทธิ์การเข้าใช้งาน</Typography.Text>}
              name='permisison'
              placeholder='สิทธิ์การเข้าใช้งาน'
              optKeys={['value', 'label']}
              options={[]}
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5 block sm:flex sm:justify-end sm:items-center sm:gap-3'>
        <Button
          type='text'
          htmlType='submit'
          size='large'
          className='!w-full lg:!w-auto !text-primary-color'
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
