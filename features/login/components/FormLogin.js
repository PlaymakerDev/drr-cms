import { FormContent } from '@/features/admin/complaint-listing/create/components/content'
import React from 'react'
import styles from '@/features/login/style/login.module.css'
import { Button, Typography, Row, Col, Form, Input, Checkbox } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleFilled, } from '@ant-design/icons'
import Image from 'next/image'
import { useForm, Field } from '@/components/form'
import { useRouter } from "next/router";
import Logo from '@/public/images/dpt-logo.png'

const Formlogin = () => {
  const router = useRouter();

  return (
    <div >
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%', // Ensures the container takes full width
        marginBottom: '20px'
      }}>
        <Image
          src="/images/Group 41848.png"
          width={150}
          height={150}
          alt="backgroud"
        />
      </div>
      <div className={styles.formContainer}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: '50px',
            marginBottom: '25px'
          }}
        >
          <Image
            src={Logo}
            alt="Login"
          
            style={{ width: '10rem',  }}
          />
        </div>
        <header className={styles.header}>
          <Typography.Title
            level={1}
            className='!m-0 !text-[#414142] !font-IBMPlexSansThaiBold '
            style={{ fontSize: '54px' }}
          >
            ระบบร้องเรียน ร้องทุกข์
          </Typography.Title>


          <h2 className={styles.secondaryLabel}>Complaint System</h2>
        </header>
        <section className='mt-5 py-2' >
          <Row gutter={[16, 30]} >
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Form.Item
                label={<span style={{ fontSize: '28px', color: '#414142' }}>ชื่อผู้ใช้งาน</span>}
                name='username'
                labelCol={{ span: 24 }}
              >
                <Input
                  // placeholder="Enter your username"
                  id='username'
                  key='username'
                  name='username'
                  // value={username}
                  // onChange={handleChange}
                  style={{
                    height: '60px'
                  }}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Form.Item
                label={<span style={{ fontSize: '28px', color: '#414142' }}>รหัสผ่าน</span>}
                name='password'
                labelCol={{ span: 24 }}

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
                  // placeholder="Input password"
                  iconRender={(visible) => (visible ?
                    <EyeTwoTone style={{ fontSize: '30px' }} /> : <EyeInvisibleOutlined style={{ fontSize: '30px' }} />)}
                  id='password'
                  key='password'
                  name='password'
                  // value={password}
                  // onChange={handleChange}
                  style={{
                    height: '60px'
                  }}


                />
              </Form.Item>
            </Col>
          </Row>

          <div className='text-left mt-10'>
            <Checkbox id='rememberMe' name='rememberMe' className='mr-2'
              style={{
                transform: 'scale(2)'

              }} />
            <Typography.Text
              style={{
                color: 'gray',
                fontSize: '25px',
                marginLeft: '8px',
                verticalAlign: 'middle'
              }}
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
            className='custom-button'
            style={{
              background: '#004F9D',
              fontSize: '28px',
              borderColor: '#004F9D',
              borderRadius: '4px',
              height: '60px',
              fontWeight: 'bold'

            }}

            onClick={() => router.push('/admin/dashboard')}
          >
            เข้าสู่ระบบ
          </Button>
        </section>

        <footer className={styles.footer} style={{ textAlign: 'center', marginTop: '100px' }}>
          <InfoCircleFilled style={{ fontSize: '24px', marginRight: '8px', color: '#414142' }} className="items:center" />
          <Typography.Text level={2} className='!text-[#919193]'>
            มีปัญหาในการเข้าสู่ระบบ ติดต่อ 02-
            <br />
            All rights reserved 2025.
          </Typography.Text>
        </footer>
      </div>
    </div>
  )
}

export default React.memo(Formlogin)
