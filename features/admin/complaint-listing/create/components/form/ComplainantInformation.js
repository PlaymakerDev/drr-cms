import React, { useEffect } from 'react'
import { Col, Row, Typography } from 'antd'
import { Field } from '@/components/form'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getDropdownSourceType } from '@/store/features/masterSlice'

const ComplainantInformation = (props) => {
  const { values, errors, handlerChange, id, data } = props
  // USE GET API
  const [apiGetSourceType, loadingSourceType, sourceType] = useGetAPI('overlay', {
    funcDispatch: getDropdownSourceType, reducerName: 'master', reducerKey: 'dropdown'
  })

  useEffect(() => {
    apiGetSourceType('/api/v1/complaints/master/dropdown', { ...sourceType.source_type.search, mas_group_code: '4' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>รายละเอียดผู้ร้องเรียน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">แหล่งที่มาข้อมูล</Typography.Text>}
              name='source_type'
              placeholder='แหล่งที่มาข้อมูล'
              optKeys={['mas_code', 'mas_name']}
              options={sourceType.source_type.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                handlerChange({
                  [name]: value,
                  additional_contact: ''
                })
                // if (value!== '8')  {
                  
                // }
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.DatePicker
              label={<Typography.Text className="!text-primary-color">รับเรื่องวันที่</Typography.Text>}
              name='date_received'
              placeholder='รับเรื่องวันที่'
              format={"DD MMMM BBBB"}
            />
          </Col>
        </Row>
        <section className='mt-5'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
              <Field.Checkbox
                name='anonymous'
                optKeys={['value', 'label']}
                options={[
                  {
                    label: 'ไม่ระบุตัวตน',
                    value: true
                  }
                ]}
                className='!text-white'
                onChange={(name, value) => {
                  if (value[0]) {
                    handlerChange({
                      [name]: value,
                      first_name: '',
                      last_name: ''
                    })
                  } else {
                    handlerChange({
                      [name]: value,
                    })
                  }
                }}
              />
            </Col>
          </Row>
        </section>
        <section className='mt-5'>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">ชื่อ</Typography.Text>}
                name='first_name'
                placeholder='ชื่อ'
                disabled={id && data.status == '3' || values.anonymous[0]}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">นามสกุล</Typography.Text>}
                name='last_name'
                placeholder='นามสกุล'
                disabled={id && data.status == '3' || values.anonymous[0]}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">เบอร์โทรศัพท์ (ผู้ร้องเรียน)</Typography.Text>}
                name='phone_number'
                placeholder='เบอร์โทรศัพท์ (ผู้ร้องเรียน)'
                // maxLength={10}
                onChange={(name, value) => {
                  handlerChange({
                    [name]: value.replace(/[^0-9]/g, '')
                  })
                }}
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">รหัสเรื่อง</Typography.Text>}
                name='additional_contact'
                placeholder='รหัสเรื่อง'
                disabled={values.source_type != 8}

              />
            </Col>
          </Row>
        </section>
      </section>
    </div>
  )
}

export default React.memo(ComplainantInformation)
