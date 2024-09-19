import { FormContent } from '@/features/admin/complaint-listing/create/components/content'
import React from 'react'
import styles from '@/features/login/style/login.module.css'
import { Button, Typography, Row, Col, Form, Input, Checkbox } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone, InfoCircleFilled, UserOutlined, UserTie } from '@ant-design/icons'
import Image from 'next/image'
import { useForm, Field } from '@/components/form'

const Formlogin = () => {

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
          src="/images/dpt-logo.png"
          width={120}
          height={120}
          alt="Login"
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
                height:'60px'
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
                <EyeTwoTone style={{fontSize:'30px'}}/> : <EyeInvisibleOutlined style={{fontSize:'30px'}}/>)}
                id='password'
                key='password'
                name='password'
              // value={password}
              // onChange={handleChange}
              style={{
                height:'60px'
              }}


              />
            </Form.Item>
          </Col>
        </Row>

        <div className='text-left mt-10'>
          <Checkbox id='rememberMe' name='rememberMe' className='mr-2' 
          style={{
            transform: 'scale(2)'
            
          }}/>
          <Typography.Text
            style={{
              color:'gray',
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
        // onClick={}
        >
          เข้าสู่ระบบ
        </Button>
      </section>

      <footer className={styles.footer} style={{ textAlign: 'center', marginTop: '100px' }}>
        <InfoCircleFilled style={{ fontSize: '24px', marginRight: '8px', color: '#414142'}} className="items:center" />
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


// import React, { useCallback } from 'react'
// import { Form, useForm, Field } from '@/components/form'
// import { Button, Typography, Row, Col } from 'antd'
// import Image from 'next/image'
// // import DPTLogo from '@/public/images/dpt-logo2.png'
// import { UserOutlined } from '@ant-design/icons'
// // import UserTie from '@/public/UserTie'

// const FormLogin = (props) => {
//   const { } = props

//   const form = useForm({
//     initialValues: {
//       username: '',
//       password: '',
//     },
//     rules: '',
//   })

//   const buildValue = useCallback((values, next) => {
//     next(values)
//   }, [])

//   const handlerSubmit = useCallback((values) => {
//     console.log(values)
//   }, [])

//   return (
//     <div className="flex flex-col items-center justify-center bg-opacity-70 text-white rounded-3xl py-4 shadow-lg p-6 md:p-8 lg:px-32">
//       <Row className="justify-center mb-4">
//         {/* <Image src={DPTLogo} alt="dpt-logo" className="w-16 md:w-20" /> */}
//       </Row>
//       <Row className="justify-center mb-2">
//         <Col>
//           <Typography.Title
//             level={2}
//             className="text-[#FFFFFF] !m-0 font-IBMPlexSansThaiBold text-center text-lg md:text-2xl"
//           >
//             กรมทางหลวงชนบท
//           </Typography.Title>
//         </Col>
//       </Row>
//       <Row className="justify-center mb-4">
//         <Typography.Text className="!font-bold !text-[#56E4EE] !text-lg md:!text-xl font-IBMPlexSansThaiSemiBold">
//           Weight Tracking System
//         </Typography.Text>
//       </Row>
//       <Row className="my-6 w-full" gutter={[0, 0]}>
//         <Form
//           form={form}
//           handlerSubmit={[buildValue, handlerSubmit]}
//           className="w-full"
//         >
//           <Field.Input
//             label="ชื่อผู้ใช้งาน"
//             name="username"
//             placeholder="ชื่อผู้ใช้งาน"
//             className="!h-8"
//             hideRequired
//           />
//           <Field.Password
//             label="รหัสผ่าน"
//             name="password"
//             placeholder="รหัสผ่าน"
//             className="!h-8"
//           />
//           <Button
//             type="primary"
//             htmlType="submit"
//             size="large"
//             block
//             className="w-full h-12 text-base font-IBMPlexSansThaiBold !text-[#1E4066] !font-bold"
//             style={{
//               backgroundColor: '#56E4EE',
//               color: '#1E4066',
//               border: 'none',
//             }}
//           >
//             เข้าสู่ระบบ
//           </Button>
//         </Form>
//       </Row>
//       <Row className="mb-4 w-full" gutter={[8, 16]}>
//         <Col xs={24} sm={24} md={12} lg={12}>
//           <Button
//             type="primary"
//             size="large"
//             block
//             className="w-full h-12 text-base font-IBMPlexSansThaiBold"
//             style={{
//               backgroundColor: '#5671EE',
//               color: '#ffffff',
//               border: 'none',
//             }}
//             // =icon={<UserTie />}
//           >
//             ผู้บริหาร
//           </Button>
//         </Col>
//         <Col xs={24} sm={24} md={12} lg={12}>
//           <Button
//             type="primary"
//             size="large"
//             block
//             className="w-full h-12 text-base font-IBMPlexSansThaiBold"
//             style={{
//               backgroundColor: '#5671EE',
//               color: '#ffffff',
//               border: 'none',
//             }}
//             icon={<UserOutlined />}
//           >
//             ประชาชนทั่วไป
//           </Button>
//         </Col>
//       </Row>
//       <Row className="mt-8 justify-center">
//         <Typography.Text className="!text-[#FFFFFF] !text-xs font-IBMPlexSansThaiThin text-center">
//           All rights reserved 2025.
//         </Typography.Text>
//       </Row>
//       <Row className="justify-center">
//         <Typography.Text className="!text-[#FFFFFF80] !text-xs font-IBMPlexSansThaiThin text-center">
//           มีปัญหาในการเข้าสู่ระบบ ติดต่อ 01-234-5678
//         </Typography.Text>
//       </Row>
//     </div>
//   )
// }

// export default FormLogin