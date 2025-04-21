import React, { useCallback, useEffect, useMemo } from 'react'
import { Col, Row, Typography, Image, Upload, Spin, message } from 'antd'
import { Field } from '@/components/form'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import {
  getProvince,
  getDistrict,
  getSubDistrict,
  clearDistrict,
  clearSubDistrict,
  getDepartment,
  getDropdownCategoryType,
  getDropdownComplaintType,
  clearDropdownComplaintType
} from '@/store/features/masterSlice'
import { useAppDispatch } from '@/store/hooks'
import dynamic from 'next/dynamic'
import { FileOutlined, FileTextOutlined } from '@ant-design/icons'
const Map = dynamic(() => import('@/components/map/Map.js'), { ssr: false })

const ComplaintContent = (props) => {
  const { values, errors, handlerChange, id, data } = props
  const dispatch = useAppDispatch()
  // USE GET
  const [apiGetProvince, loadingProvince, province] = useGetAPI('overlay', {
    funcDispatch: getProvince, reducerName: 'master', reducerKey: 'province'
  })

  const [apiGetDistrict, loadingDistrict, district] = useGetAPI('overlay', {
    funcDispatch: getDistrict, reducerName: 'master', reducerKey: 'district'
  })

  const [apiGetSubDistrict, loadingSubDistrict, subDistrict] = useGetAPI('overlay', {
    funcDispatch: getSubDistrict, reducerName: 'master', reducerKey: 'sub_district'
  })

  const [apiGetDepartment, loadingDepartment, department] = useGetAPI('overlay', {
    funcDispatch: getDepartment, reducerName: 'master', reducerKey: 'department'
  })

  const [apiGetCategoryType, loadingCategoryType, categoryType] = useGetAPI('overlay', {
    funcDispatch: getDropdownCategoryType, reducerName: 'master', reducerKey: 'dropdown'
  })

  const [apiGetComplaintType, loadingComplaintType, complaintType] = useGetAPI('overlay', {
    funcDispatch: getDropdownComplaintType, reducerName: 'master', reducerKey: 'dropdown'
  })

  useEffect(() => {
    apiGetProvince('/api/v1/master/provinces', { ...province.search }, false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (values.province) {
      apiGetDistrict('/api/v1/master/district', { ...district.search, province_id: values.province }, false, {})
    }
    dispatch(clearDistrict({ data: [] }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.province])

  useEffect(() => {
    if (values.district) {
      apiGetSubDistrict('/api/v1/master/subDistrict', { ...subDistrict.search, district_id: values.district }, false, {})
    }
    dispatch(clearSubDistrict({ data: [] }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.district])

  useEffect(() => {
    apiGetDepartment('/api/v1/department/master/department', {}, false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    apiGetCategoryType('/api/v1/complaints/master/dropdown', { ...categoryType.category_type.search, mas_group_code: '1' })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (values.category_type) {
      const COMPLAINT_ID = {
        "1": "2",
        "2": "3"
      }
      apiGetComplaintType('/api/v1/complaints/master/dropdown', { ...complaintType.complaint_type.search, mas_group_code: COMPLAINT_ID[values.category_type] })
    }
    dispatch(clearDropdownComplaintType({ data: [] }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.category_type])

  useEffect(() => {
    if (values.category_type == '1' && values.complaint_type == '12') {
      return
    } else if (values.category_type == '2' && values.complaint_type == '8') {
      return
    }
    handlerChange({
      complaint_other: ''
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.category_type, values.complaint_type])

  const renderMap = useMemo(() => {
    return (
      <Map
        latitude={values.latitude || 0}
        longitude={values.longitude || 0}
      />
    )
  }, [values.latitude, values.longitude])

  const iconRender = (file) => {
    if (file.status === 'done') {
      return <FileOutlined style={{ color: 'white' }} />;
    }
    return <FileTextOutlined style={{ color: 'white' }} />;
  };

  const handlerDeleteFile = useCallback((name, list, file) => {
    handlerChange({
      [name]: list,
      [`attachment_received${file?.uid}`]: null
    })
    console.log('list----->>>>>', list);
    console.log('list----->>>>> file', file);
  }, [/*id, values, data,*/ handlerChange])


  console.log('type values', values?.complaint_type)
  return (
    <div>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>เนื้อหาเรื่องร้องเรียน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">ชื่อ-นามสกุล ผู้รับผิดชอบ</Typography.Text>}
              name='certifier_by'
              placeholder='ชื่อ-นามสกุล ผู้รับผิดชอบ'
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">ตำแหน่งผู้รับผิดชอบ</Typography.Text>}
              name='certifier_role'
              placeholder='ตำแหน่งผู้รับผิดชอบ'
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">เบอร์โทรศัพท์ (ผู้รับผิดชอบ)</Typography.Text>}
              name='officer_tel'
              placeholder='เบอร์โทรศัพท์ (ผู้รับผิดชอบ)'
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
              label={<Typography.Text className="!text-primary-color">อีเมลผู้รับผิดชอบ</Typography.Text>}
              name='officer_email'
              placeholder='อีเมลผู้รับผิดชอบ'
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">หมวดหมู่</Typography.Text>}
              name='category_type'
              placeholder='หมวดหมู่'
              optKeys={['mas_code', 'mas_name']}
              options={categoryType.category_type.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                dispatch(clearDropdownComplaintType({ data: [] }))
                handlerChange({
                  [name]: value,
                  complaint_type: ''
                })
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">ประเภทเรื่องร้องทุกข์</Typography.Text>}
              name='complaint_type'
              placeholder='ประเภทเรื่องร้องทุกข์'
              optKeys={['mas_code', 'mas_name']}
              options={complaintType.complaint_type.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                handlerChange({
                  [name]: value
                })
              }}
            />
          </Col>
          {values?.complaint_type == 12 &&
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">อื่นๆ</Typography.Text>}
                name='complaint_other'
                // placeholder='อื่นๆ'
                maxLength={255}
                placeholder='กรุณากรอกไม่เกิน 255 ตัวอักษร'
                disabled={((values.category_type == '1' && values.complaint_type == '12') || (values.category_type == '2' && values.complaint_type == '8')) ? false : true} />
            </Col>
          }

        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">จังหวัด</Typography.Text>}
              name='province'
              placeholder='จังหวัด'
              optKeys={['id', 'name_th']}
              options={province.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                dispatch(clearDistrict({ data: [] }))
                dispatch(clearSubDistrict({ data: [] }))
                handlerChange({
                  [name]: value,
                  district: '',
                  sub_district: ''
                })
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">อำเภอ</Typography.Text>}
              name='district'
              placeholder='อำเภอ'
              optKeys={['id', 'name_th']}
              options={district.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                dispatch(clearSubDistrict({ data: [] }))
                handlerChange({
                  [name]: value,
                  sub_district: ''
                })
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Select
              label={<Typography.Text className="!text-primary-color">ตำบล</Typography.Text>}
              name='sub_district'
              placeholder='ตำบล'
              optKeys={['id', 'name_th']}
              options={subDistrict.data || []}
              allowClear
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
              onChange={(name, value) => {
                handlerChange({
                  [name]: value
                })
              }}
            />
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">สายทาง</Typography.Text>}
              name='road'
              placeholder='กก.1234'
            />
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          {/* <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}> */}
          {/* <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=100.7657%2C13.7162%2C100.7913%2C13.7458&amp;layer=mapnik"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              className="rounded-3xl"
            /> */}
          {/* {renderMap} */}
          {/* </Col> */}
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Row gutter={[16, 16]}>
              {/* <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Number
                  label={<Typography.Text className="!text-primary-color">ละติจูด</Typography.Text>}
                  name='latitude'
                  placeholder='ละติจูด'
                  onlyNumber={false}
                  allowLeadingZeros
                  allowNegative
                  decimalScale={13}
                  thousandSeparator={false}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                  }}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Number
                  label={<Typography.Text className="!text-primary-color">ลองติจูด</Typography.Text>}
                  name='longitude'
                  placeholder='ลองติจูด'
                  onlyNumber={false}
                  allowLeadingZeros
                  allowNegative
                  decimalScale={13}
                  thousandSeparator={false}
                  onInput={(e) => {
                    e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                  }}
                />
              </Col> */}
              <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                <Field.TextArea
                  label={<Typography.Text className="!text-primary-color">บริเวณ</Typography.Text>}
                  name='area'
                  placeholder='กรุณากรอกไม่เกิน 255 ตัวอักษร'
                  maxLength={255}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </section>
      <section className='mt-5'>
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={12} lg={12} xl={24} xxl={24}>
                <Field.Select
                  label={<Typography.Text className="!text-primary-color">แจ้ง สำนัก/กอง</Typography.Text>}
                  name='notified_office'
                  placeholder='แจ้งสำนักกอง'
                  optKeys={['deptofficeno', 'deptname']}
                  options={department.data || []}
                  allowClear
                  showSearch
                  optionFilterProp="children"
                  filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
                  onChange={(name, value) => {
                    handlerChange({
                      [name]: value
                    })
                  }}
                />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
                <Field.Input
                  label={<Typography.Text className="!text-primary-color">ที่ คค.</Typography.Text>}
                  name='document'
                  placeholder='ที่ คค.'
                />
              </Col>
            </Row>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <section>
              <Typography.Title level={5} className='!m-0 !text-primary-color'>ไฟล์ประกอบการร้องเรียน</Typography.Title>
              <Typography.Text className='!text-[#FFFFFF80]'>เลือกไฟล์เพื่ออัปโหลดรายการเอกสารที่เกี่ยวข้อง (รองรับไฟล์ .pdf, .jpg, .png เท่านั้น ไฟล์ขนาดไม่เกิน 10 MB)</Typography.Text>
            </section>
            <section className='mt-5 small-article-block'>
              <Field.Upload
                name='complaint_file'
                onChange={(n, v) => {
                  handlerChange((prev) => ({ [n]: v?.map((item) => ({ ...item, og_name: item?.name, name: 'เอกสารร้องทุก' })) }))
                }}
                maxCount={5}
                accept="image/png, image/jpeg, application/pdf"
                listType='picture-card'
                maxSizeLimit={10000000}
                onRemove={(n, list, file) => { id ? handlerDeleteFile(n, list, file) : undefined }}
                hideRequired={!errors.complaint_file}
                beforeUpload={(file) => {
                  // DEFAULT VALUES
                  const allowList = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf']
                  const maxFileSize = 10000000
                  // CHECK
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
                  // RETURN UPLOAD.LIST_IGNORE
                  return false;
                }}
                iconRender={iconRender} // เพิ่ม iconRender ที่นี่
                label={<Typography.Text className='!text-primary-color'>เลือกไฟล์</Typography.Text>}
              />

            </section>
          </Col>
        </Row>
      </section>
    </div >
  )
}

export default React.memo(ComplaintContent)
