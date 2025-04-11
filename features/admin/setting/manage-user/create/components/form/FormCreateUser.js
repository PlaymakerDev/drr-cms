import React, { useCallback, useEffect, useState } from 'react'
import { Field, Form, useForm } from '@/components/form'
import { Row, Col, Button, Typography , message } from 'antd'
import { useRouter } from 'next/router'
import usePostAPI from '@/utils/hooks/api/usePostAPI'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getPrefix, getRole, getPosition } from '@/store/features/masterSlice'
import { useAppDispatch } from '@/store/hooks'

const prefixes = [
  "คุณ", "นาย", "นางสาว", "นาง", "น.ส", "เด็กชาย", "ด.ช.", "เด็กหญิง", "ด.ญ.", "ศ.", "ผศ.", "อ.", "พ.อ.", "พ.ท.",
  "น.ศ.", "ว่าที่ร้อยตรี", "ว่าที่ ร.ต.", "พ.จ.", "พล.อ.", "พล.ท.", "พล.ต.", "ส.", "ท.", "ว.", "ท่าน", "เจ้าคุณ", "พระ"
];

const FormCreateUser = (props) => {
  const { initialValues, values, errors } = props;
  const dispatch = useAppDispatch()
  const router = useRouter()
  const { query } = router; // รับข้อมูลจาก query params
  const [selectedUser, setSelectedUser] = useState({});
  const [apiPost, loadingPost] = usePostAPI('overlay')
  const [apiGet] = useGetAPI();



  const [apiGetPrefix, loadingPrefix, prefix_name] = useGetAPI('overlay', {
    funcDispatch: getPrefix, reducerName: 'master', reducerKey: 'prefix_name'
  })

  const [apiGetRole, loadingRole, Role] = useGetAPI('overlay', {
    funcDispatch: getRole, reducerName: 'master', reducerKey: 'role'
  })

  const [apiGetPosition, loadingPosition, position] = useGetAPI('overlay', {
    funcDispatch: getPosition, reducerName: 'master', reducerKey: 'position'
  })



  // ฟังก์ชันเพื่อแยกคำนำหน้าออกจาก name
  const splitName = (fullName) => {
    for (const prefix of prefixes) {
      if (fullName.startsWith(prefix)) {
        const nameWithoutPrefix = fullName.slice(prefix.length).trim(); // ตัดคำนำหน้าออก
        const parts = nameWithoutPrefix.split(' '); // แบ่งชื่อและนามสกุล
        return {
          prefix: prefix,
          first_name: parts[0] || '', // เอาคำแรกเป็นชื่อ
          last_name: parts.length > 1 ? parts.slice(1).join(' ') : '', // เอาคำที่เหลือเป็นนามสกุล
        };
      }
    }
    // ถ้าไม่มีคำนำหน้า
    return {
      prefix: '',
      first_name: fullName.split(' ')[0] || '', // คำแรกเป็นชื่อ
      last_name: fullName.split(' ').slice(1).join(' ') || '', // คำที่เหลือเป็นนามสกุล
    };
  };



  // กำหนดค่าเริ่มต้นของ form
  const { prefix, first_name, last_name } = splitName(initialValues.name || '');

  const form = useForm({
    username: initialValues.username || '',
    prefix: prefix || '',
    name: initialValues.name || '',
    first_name: first_name || '',
    last_name: last_name || '',
    permission: '',
    position: ''
  })

  const { handlerChange } = form

  useEffect(() => {
    handlerChange({
      username: initialValues.username || '',
      prefix: prefix || '',
      name: initialValues.name || '',
      first_name: first_name || '',
      last_name: last_name || '',
      permission: '',
      position: ''
    })
  }, [initialValues, prefix, first_name, last_name])

  useEffect(() => {
    apiGetPosition('/api/v1/tblposition', {}, false, {})
    apiGetPrefix('/api/v1/prefix', {}, false, {})
    apiGetRole('/api/v1/role', {}, false, {})
  }, [])


  const buildValue = useCallback((values, next) => {
    const body = {
      username: values.username || '',
      prefix: values.prefix || '',
      first_name: values.first_name || '',
      last_name: values.last_name || '',
      position: values.possition || '',
      role: values.permisison || ''
    }
    next(body);
  }, []);


  const handlerSubmit = useCallback(async (values, next) => {
    const response = await apiPost('/api/v1/user/signup', values, {}, false, {})
    if (response?.success) {
      message.success('เพิ่มข้อมูลสำเร็จ')
      router.push('/admin/setting/manage-user/overview')

    } else {
      message.error('ไม่สามารถบันทึกข้อมูลได้')
    }
  }
    , [])


  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <section>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>Username</Typography.Text>}
              name='username'
              // placeholder='Username'
              disabled
            // value={selectedUser.username}
            />
          </Col>
        </Row>
      </section>
      <section className='mt-3'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <Field.Select
              label={<Typography.Text className='!text-primary-color'>คำนำหน้า</Typography.Text>}
              name='prefix'
              placeholder='คำนำหน้า'
              optKeys={['prefix', 'prefix']}
              value={selectedUser.prefix}
              options={prefix_name?.data?.data || []} // ใช้ตำแหน่งที่ดึงจาก API
              allowClear
              showSearch
              rules={[{ required: true, message: 'กรุณาเลือกคำนำหน้า' }]}
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>ชื่อ</Typography.Text>}
              name='first_name'
              placeholder='ชื่อ'
            // value={selectedUser.name}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={8} xl={8} xxl={8}>
            <Field.Input
              label={<Typography.Text className='!text-primary-color'>นามสกุล</Typography.Text>}
              name='last_name'
              placeholder='นามสกุล'
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Field.Select
              label={<Typography.Text className='!text-primary-color'>สิทธิ์การเข้าใช้งาน</Typography.Text>}
              name='permisison'
              placeholder='สิทธิ์การเข้าใช้งาน'
              optKeys={['id', 'role']}
              options={Role?.data?.data?.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              defaultValue={null}
            />
          </Col>

          <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
            <Field.Select
              label={<Typography.Text className='!text-primary-color'>ตำแหน่ง</Typography.Text>}
              name='possition'
              placeholder='เลือกตำแหน่ง'
              optKeys={['PID', 'PName']}
              options={position.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              defaultValue={null}
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
        // onClick={ }
        >
          บันทึก
        </Button>
      </section>
    </Form>
  )
}

export default React.memo(FormCreateUser)
