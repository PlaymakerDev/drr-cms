import React, { useCallback, useState, useMemo } from 'react'
import { useForm, Form, Field } from '@/components/form'
import DPTLogo from '@/public/images/dpt-logo.svg'
import VectorTop from '@/public/images/vector-top.svg'
import VectorBottom from '@/public/images/vector-bottom.svg'
import Image from 'next/image'
import { Alert, Button, Col, Row, Typography } from 'antd'

const ROLE = "ADMIN"

const initialValues = {
  // Ohm Dev
  username: '',
  password: '',
  remember: false,
  remember_me: false
  // username: '',
  // password: '',
}

const FormLogin = (props) => {
  const { initUsername, actionURL, error } = props
  const [token, setToken] = useState(null)

  const form = useForm({
    initialValues: {
      ...initialValues,
      username: initUsername || initialValues.username,
    },
    rules: {
      username: {
        required: 'required_username'
      },
      password: {
        required: 'required_password'
      }
    }
  })

  const { } = form

  const buildValue = useCallback((values, next) => {
    const body = {
      username: values.username,
      password: values.password,
      remember: values.remember,

    }
    next(body)
  }, [])

  const handlerSubmit = useCallback((values) => {
    if (values?.remember[0] === true) {
      document.getElementById('remember_me').value = true;
    } else {
      document.getElementById('remember_me').value = false;
    }
    (document.getElementById('role'))?.setAttribute?.('value', ROLE);
    (document.getElementById('token'))?.setAttribute?.('value', token);
    (document.getElementById('form-login'))?.submit();

  }, [token])

  const errorMessage = useMemo(() => {
    if (error?.message) {
      return error?.message
    }
  }, [error])

  return (
    <div className='relative w-full h-full'>
      <div className='h-full w-full max-w-[80%] lg:max-w-[60%] flex flex-col justify-center m-auto'>
        <section>
          <Image
            src={DPTLogo}
            alt='dpt-logo'
            width={152}
            height={152}
            className='block m-auto'
          />
        </section>
        <section className='my-5 text-center'>
          <Typography.Title level={2} className='!m-0 !font-IBMPlexSansThaiSemiBold'>ระบบร้องเรียน ร้องทุกข์</Typography.Title>
          <Typography.Text className='!text-xl !text-[#41414250]'>Complaint System</Typography.Text>
        </section>
        {!!errorMessage && (
          <section className='mb-5'>
            <Alert message={errorMessage} type="error" />
          </section>
        )}
        <section>
          <Form
            form={form}
            action={actionURL}
            method="POST"
            handlerSubmit={[buildValue, handlerSubmit]}
            id={'form-login'}
          >
            <div className='grid grid-cols-1'>
              <Field.Input
                label='ชื่อผู้ใช้งาน'
                name='username'
                placeholder='ชื่อผู้ใช้งาน'
                className='!p-3'
              />
              <Field.Password
                label='รหัสผ่าน'
                name='password'
                placeholder='รหัสผ่าน'
                className='!p-3'
              />
              <Field.Checkbox
                id='remember'
                name='remember'
                optKeys={['value', 'label']}
                options={[
                  {
                    label: 'จดจำฉัน',
                    value: true
                  }
                ]}
                className='login-checkbox'
              />
              <input type="hidden" name='remember_me' id='remember_me' />
              <Button
                htmlType='submit'
                type='primary'
                size='large'
                className='!h-12 !bg-[#004F9D] hover:!bg-[#3977b4]'
                disabled={form.submitting}
                loading={form.submitting}
              >
                เข้าสู่ระบบ
              </Button>
            </div>
          </Form>
        </section>
        <section className='mt-12'>
          <div className='mt-5 flex flex-col items-center gap-3'>
            <Typography.Text className='!text-base !text-[#414142]'>มีปัญหาในการเข้าสู่ระบบ ติดต่อ 02-XXX-XXXX</Typography.Text>
            <Typography.Text className='!text-base !text-[#41414250]'>All rights reserved 2025. </Typography.Text>
          </div>
        </section>
        <Image
          src={VectorTop}
          alt='vector-top'
          className='absolute top-0 right-0'
        />
        <Image
          src={VectorBottom}
          alt='vector-top'
          className='absolute bottom-16 left-[-4rem]'
        />
      </div>
    </div>
  )
}

export default React.memo(FormLogin)
