import { FormContent } from '@/features/admin/complaint-listing/create/components/content'
import React from 'react'
import styles from '@/features/login/style/login.module.css'
import { Button, Typography, Row, Col, Form, Input } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import Image from 'next/image'

const Formlogin = () => {

  return (
    <div>
      <div >
      <Image
          src="/images/dpt-logo.png"
          width={150}
          height={150}
          alt="Login"
        />
      </div>
      <section className='mt-5 py-2'>
        <Row gutter={[16, 30]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Form.Item
              layout='vertical'
              label='ชื่อผู้ใช้งาน'
              name='username'
            >
              <Input
                // placeholder="Enter your username"
                id='username'
                key='username'
                name='username'
              // value={username}
              // onChange={handleChange}
              />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <Form.Item
              layout='vertical'
              label='รหัสผ่าน'
              name='password'

            // rules={[
            //   {
            //     required: true, // The field is required
            //     message: 'Please input your password!', // Error message if field is empty
            //   },
            //   {
            //     min: 8, // Minimum length for the password
            //     // message: 'Password must be at least 8 characters long!', // Error message if length is less than 6
            //   },
            //   {
            //     pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/, // Regular expression for password validation
            //     message: 'Password not correct', // Error message if pattern doesn't match
            //   },
            // ]}
            >
              <Input.Password
                placeholder="Input password"
                iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                id='password'
                key='password'
                name='password'
              // value={password}
              // onChange={handleChange}


              />
            </Form.Item>
          </Col>
        </Row>

        <div className='text-left mt-10'>
          <Typography.Text
            Style='color:gray'
            className='!italic '
          >
            จดจำฉัน
          </Typography.Text>
        </div>

      </section>
      <section className='mt-10'>
        <Button
          type='primary'
          size='large'
          block
          style={{
            background: '#004F9D'

          }}
          // onClick={}
        >
          เข้าสู่ระบบ
        </Button>
      </section>
    </div>
  )
}

export default React.memo(Formlogin)
