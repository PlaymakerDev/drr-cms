import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useForm, Form } from '@/components/form'
import { Button, Divider, message, Typography, Tag } from 'antd'
import { ComplainantInformation, ComplaintContent, ComplaintTitle, OperationProgress } from '../form'
import { useRouter } from 'next/router'
import dayjs from 'dayjs'
import usePostAPI from '@/utils/hooks/api/usePostAPI'
import usePatchAPI from '@/utils/hooks/api/usePatchAPI'
import { formValidator } from '@/utils/validate'
import { UploadOutlined } from '@ant-design/icons'
import { ERROR_MESSAGE_INTERNAL_SERVER_ERROR } from '@/utils/constant'
import config from '@/config'
import axios from 'axios'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { BADGE_CONFIG } from '@/utils/constant'
import { useSelector } from 'react-redux';
import { user_get } from '@/store/features/userSlice'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getPosition } from '@/store/features/masterSlice'
import { selectUsername } from '@/store/features/userAuthenSlice'

dayjs.extend(utc);
dayjs.extend(timezone);

const FormContent = (props) => {
  const { id, data } = props
  const router = useRouter()
  const user = {
    token: useSelector(state => state.userAuthen.token)
  }
  // USE POST API
  const [apiPost, loadingPost] = usePostAPI('overlay')
  const [apiPatch, loadingPatch] = usePatchAPI('overlay')
  // API UPLOAD
  const apiUpload = useCallback((id, body) => {
    return apiPost(`/api/v1/complaints/fix_upload/${id}`, body, undefined, false, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  }, [apiPost]);
  // LOADING
  const [loading, setLoading] = useState(false)

  const [apiFindUserData, loadingFindUserData, FindUserData] = useGetAPI('overlay', { funcDispatch: user_get, reducerName: 'user', reducerKey: 'user_get' })
  const [apiGetPosition, loadingGetPosition, GetPosition] = useGetAPI("overlay", { funcDispatch: getPosition, reducerName: "master", reducerKey: "position", });
  const username = useSelector(selectUsername);

  useEffect(() => {
    apiFindUserData('/api/v1/user/findUser', { ...FindUserData.search, username: username }, false, {})
    apiGetPosition("/api/v1/tblposition", {}, false, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username])


  const RealPosition = GetPosition?.data.find(item => item?.PID === FindUserData?.data[0]?.position)?.PName

  const getAttrachment = {
    received: [
      data?.attachment_received1,
      data?.attachment_received2,
      data?.attachment_received3,
      data?.attachment_received4,
      data?.attachment_received5,
    ],
    closed: [
      data?.attachment_closed1,
      data?.attachment_closed2,
      data?.attachment_closed3,
      data?.attachment_closed4,
      data?.attachment_closed5,
    ]
  }

  const renderAttrachmentReceived = useMemo(() => {
    let data = []
    getAttrachment?.received?.forEach((item, index) => {
      if (!!item) {
        data.push({
          uid: index + 1,
          name: item,
          status: 'done',
          url: `${config.hostBackend}/api/v1/complaints/get_file/${id}?filename=${item}`
        })
      }
    })
    return data
  }, [getAttrachment?.received, id])

  const renderAttrachmentClosed = useMemo(() => {
    let data = []
    getAttrachment?.closed?.forEach((item, index) => {
      if (!!item) {
        data.push({
          uid: index + 1,
          name: item,
          status: 'done',
          url: `${config.hostBackend}/api/v1/complaints/get_file/${id}?filename=${item}`
        })
      }
    })
    return data
  }, [getAttrachment?.closed, id])

  console.log(data)

  const form = useForm({
    initialValues: {
      topic_header: data?.topic_header || 'สำนักงานเลขานุการกรม กลุ่มบริหารข้อมูลข่าวสารและเรื่องราวร้องทุกข์ โทร. ๐ ๒๕๕๑ ๕๒๐๐',
      certifier_by: data?.certifier_by || '',
      certifier_role: data?.certifier_role || '',
      officer_tel: data?.officer_tel || '',
      officer_email: data?.officer_email || '',
      source_type: data?.source_type || '',
      date_received: data?.date_received ? dayjs(data?.date_received) : dayjs(),
      anonymous: data?.anonymous ? [true] : [false],
      first_name: data?.first_name || '',
      last_name: data?.last_name || '',
      phone_number: data?.phone_number || '',
      additional_contact: data?.additional_contact || '',
      category_type: data?.category_type || '1',
      complaint_type: data?.complaint_type || '',
      complaint_other: data?.complaint_other || '',
      province: Number(data?.province) || '',
      district: Number(data?.district) || '',
      sub_district: Number(data?.sub_district) || '',
      road: data?.road || '',
      latitude: data?.latitude || '',
      longitude: data?.longitude || '',
      area: data?.area || '',
      notified_office: Number(data?.sub_notified_office ? data?.sub_notified_office : data?.notified_office) || '',
      document: data?.document || '',
      date_closed: data?.date_closed ? dayjs(data?.date_closed) : '',
      explanation_result: data?.explanation_result || '',
      // UNUSED STATUS
      // status: '',
      // receive_at: '',
      // progress_at: '',
      // terminate_at: '',
      // FILE
      complaint_file: renderAttrachmentReceived || [],
      progress_file: renderAttrachmentClosed || [],
      // ATTRACHMENT
      attachment_closed1: data?.attachment_closed1 || null,
      attachment_closed2: data?.attachment_closed2 || null,
      attachment_closed3: data?.attachment_closed3 || null,
      attachment_closed4: data?.attachment_closed4 || null,
      attachment_closed5: data?.attachment_closed5 || null,
      attachment_received1: data?.attachment_received1 || null,
      attachment_received2: data?.attachment_received2 || null,
      attachment_received3: data?.attachment_received3 || null,
      attachment_received4: data?.attachment_received4 || null,
      attachment_received5: data?.attachment_received5 || null
    },
    rules: {
      first_name: {
        required: 'required_first_name'
      },
      last_name: {
        required: 'required_last_name'
      },
      phone_number: {
        required: 'required_phone_number'
      },
      province: {
        required: 'required_province'
      },
      district: {
        required: 'required_district'
      },
      sub_district: {
        required: 'required_subdistrict'
      },
      area: {
        required: 'required_area'
      },
      // phone_number: {
      //   isAllowed: {
      //     func: (value) => {
      //       if (value.length) {
      //         return formValidator.validatePhoneNumber(value);
      //       } else {
      //         return true
      //       }
      //     },
      //     msg: "validate_phone_numnber_incorrect"
      //   }
      // },
      // officer_tel: {
      //   isAllowed: {
      //     func: (value) => {
      //       if (value.length) {
      //         return formValidator.validatePhoneNumber(value);
      //       } else {
      //         return true
      //       }
      //     },
      //     msg: "validate_phone_numnber_incorrect"
      //   }
      // },
    },
    // blackList: !id || data?.status == '1' ? ['date_closed', 'explanation_result', 'progress_file'] : []
    blackList: id && data?.status == '3' ? '*' : !id || data?.status == '1' ? ['date_closed', 'explanation_result', 'progress_file'] : []
  })

  const { values, errors, handlerChange } = form

  console.log('===', values)

  const buildValue = useCallback((values, next) => {
    const body = {
      json_value: {
        topic_header: values.topic_header,
        certifier_by: values.certifier_by,
        certifier_role: values.certifier_role,
        officer_tel: values.officer_tel,
        officer_email: values.officer_email,
        source_type: values.source_type,
        // date_received: values.date_received ? dayjs(values.date_received).format('YYYY-MM-DD') : '',
        date_received: values.date_received ? dayjs(values.date_received).format('YYYY-MM-DDT00:00:00+7:00') : '',
        anonymous: values.anonymous[0] ? true : false,
        first_name: values.first_name,
        last_name: values.last_name,
        phone_number: values.phone_number,
        additional_contact: values.additional_contact,
        category_type: values.category_type,
        complaint_type: values.complaint_type,
        complaint_other: values.complaint_other,
        province: values.province,
        district: values.district,
        sub_district: values.sub_district,
        road: values.road,
        // latitude: values.latitude,
        // longitude: values.longitude,
        area: values.area,
        notified_office: values.notified_office,
        document: values.document,
        // date_closed: values.date_closed ? dayjs(values.date_closed).format('YYYY-MM-DD') : '',
        date_closed: values.date_closed ? dayjs(values.date_closed).format() : '',
        explanation_result: values.explanation_result,
        // UNUSED STATUS
        status: '',
        receive_at: '',
        progress_at: '',
        terminate_at: '',
      },
      binary_value: {
        complaint_file: values.complaint_file,
        progress_file: values.progress_file,
      },
      file_attrachment: {
        attachment_closed1: values.attachment_closed1,
        attachment_closed2: values.attachment_closed2,
        attachment_closed3: values.attachment_closed3,
        attachment_closed4: values.attachment_closed4,
        attachment_closed5: values.attachment_closed5,
        // attachment_received1: values.complaint_file[0] ? values.complaint_file[0] : null,
        // attachment_received2: values.complaint_file[1] ? values.complaint_file[0] : null,
        // attachment_received3: values.complaint_file[2] ? values.complaint_file[0] : null,
        // attachment_received4: values.complaint_file[3] ? values.complaint_file[0] : null,
        // attachment_received5: values.complaint_file[4] ? values.complaint_file[0] : null,
        attachment_received1: values.attachment_received1 === '' ? null : values.attachment_received1,
        attachment_received2: values.attachment_received2 === '' ? null : values.attachment_received2,
        attachment_received3: values.attachment_received3 === '' ? null : values.attachment_received3,
        attachment_received4: values.attachment_received4 === '' ? null : values.attachment_received4,
        attachment_received5: values.attachment_received5 === '' ? null : values.attachment_received5
      }
    }
    console.log('body ', body);
    next(body)
  }, [])

  const handlerSubmit = useCallback(async (values, next) => {
    console.log('values ', values);
    if (id) {
      // const complaintFile = values.binary_value.complaint_file
      // const progressFile = values.binary_value.progress_file
      // console.log(complaintFile)
      // console.log(progressFile)

      const nullFileAttachments = Object.fromEntries(
        Object.entries(values?.file_attrachment).filter(([key, value]) => value === null)
      )

      const response = await apiPost(`/api/v1/complaints/update/${id}`, { ...values.json_value, ...nullFileAttachments }, {}, false)
      // if (response?.success) {
      if (response?.message === 'Complaint updated successfully!') {
        let parse_data = {
          binary_value: { ...values.binary_value },
          api_response: response?.complaint,
        }
        next(parse_data)
      } else {
        message.error('ไม่สามารถแก้ไขข้อมูลได้')
      }
    } else {
      const response = await apiPost('/api/v1/complaints', values.json_value, {}, false)
      if (response?.success) {
        let parse_data = {
          binary_value: { ...values.binary_value },
          api_response: response?.data
        }
        next(parse_data)
      } else {
        message.error('กรุณากรอกข้อมูลให้ครบถ้วน')
      }
    }
  }, [id, apiPost])

  const uploadFile = useCallback(async (values) => {
    let file = values.binary_value
    let response_list = []

    if (!!file?.complaint_file?.some(item => item.hasOwnProperty('originFileObj'))) {
      const body = new FormData()
      body.append('type', 'receive')
      file?.complaint_file?.forEach(item => {
        if (item.originFileObj) {
          body.append('files', item.originFileObj)
        }
      })
      // CHECK RESPONSE
      const response = await apiUpload(values?.api_response?.cid, body)
      // PUSH IF SUCCESS
      if (response?.message === 'Files uploaded and record created/updated successfully!') {
        response_list.push(true)
      }
    }

    if (!!file?.progress_file?.some(item => item.hasOwnProperty('originFileObj'))) {
      const body = new FormData()
      body.append('type', 'close')
      file?.progress_file?.forEach(item => {
        if (item.originFileObj) {
          body.append('files', item.originFileObj)
        }
      })
      // CHECK RESPONSE
      const response = await apiUpload(values?.api_response?.cid, body)
      // PUSH IF SUCCESS
      if (response?.message === 'Files uploaded and record created/updated successfully!') {
        response_list.push(true)
      }
    }

    // CHECK RESULT
    const response = response_list.every(item => item === true)
    // IF SUCCESS
    if (response) {
      message.success('บันทึกข้อมูลสำเร็จ')
      router.push('/admin/complaint-listing/overview')
    } else {
      message.error('ไม่สามารถบันทึกข้อมูลได้')
    }

  }, [apiUpload, router])

  const downloadFile = useCallback(async (complaint_id) => {
    // SETTING QUERIES
    const body = {
      cid: complaint_id
    }
    // SET LOADING TO TRUE
    setLoading(true)
    // SEND REQUEST TO API END POINT
    const { success, response } = await axios.get(`${config.hostBackend}/api/v1/report/export`, {
      params: body,
      headers: {
        "Authorization": `Bearer ${user.token}`
      },
      responseType: 'blob'
    }).then((res) => {
      return {
        success: true,
        response: {
          data: res?.data,
          message: "Retrieved file successfully!"
        }
      }
    }).catch((error) => {
      return {
        success: false,
        response: {
          data: null,
          message: error?.message
        }
      }
    }).finally(() => {
      // SET LOADING TO FALSE
      setLoading(false)
    })
    if (success) {
      const fileDownload = document.createElement('a')
      const blobURL = window.URL.createObjectURL(new Blob([response?.data]))
      fileDownload.setAttribute('href', blobURL)
      fileDownload.setAttribute('download', 'COMPLAINT_DOCUMENT.pdf')
      fileDownload.click()
    } else {
      message.error(response?.message || ERROR_MESSAGE_INTERNAL_SERVER_ERROR)
    }
  }, [user.token])

  useEffect(() => {
    console.log('stype', values.source_type)
  }, [values.source_type])

  // useEffect(() => {
  //   if (values.source_type !== 8) {
  //     form.setFieldValue('additional_contact', ''); // เคลียร์ค่า
  //   }
  // }, [values.source_type, form]);

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit, uploadFile]}>
      <section>
        <div className='flex flex-wrap justify-between items-center gap-5'>
          <div className='flex flex-wrap  items-center gap-5'>
            <div className='basis-full sm:basis-auto flex items-center gap-3 flex-wrap'>
              <Typography.Title level={4} className='!m-0 !text-primary-color'>แบบรับเรื่องร้องเรียน</Typography.Title>
              {id ?
                <Tag color={BADGE_CONFIG[data?.status]?.color}>{BADGE_CONFIG[data?.status]?.text}</Tag> :
                null
              }
            </div>
          </div>
          <div className='flex flex-col grow sm:grow-0 sm:items-end sm:justify-end'>
            <Typography.Text className='!text-primary-color !text-sm'>ผู้บันทึกข้อมูล</Typography.Text>
            <Typography.Text className='!text-primary-color !text-base' strong>{RealPosition} {FindUserData?.data[0]?.prefix} {FindUserData?.data[0]?.first_name} {FindUserData?.data[0]?.last_name}</Typography.Text>
            {(data?.status == '2' || data?.status == '1') ?
              <Button
                htmlType='button'
                type="primary"
                icon={<UploadOutlined />}
                loading={loading}
                onClick={() => downloadFile(id)}
              >
                Export
              </Button>
              : null}
          </div>
        </div>
      </section>
      <section>
        <ComplaintTitle
          handlerChange={handlerChange}
          values={values}
          errors={errors}
          id={id}
          data={data}
        />
      </section>
      <section className='mt-5'>
        <ComplainantInformation
          handlerChange={handlerChange}
          values={values}
          errors={errors}
          id={id}
          data={data}
        />
      </section>
      <Divider className='!border-[#FFFFFF80]' />
      <section>
        <ComplaintContent
          handlerChange={handlerChange}
          values={values}
          errors={errors}
          id={id}
          data={data}
        />
      </section>
      <Divider className='!border-[#FFFFFF80]' />
      <section>
        <OperationProgress
          values={values}
          errors={errors}
        />
      </section>
      <Divider className='!border-[#FFFFFF80]' />
      <section>
        <div className='flex items-center flex-wrap gap-3 lg:justify-end'>
          <Button
            type='text'
            htmlType='button'
            size='large'
            className='!w-full lg:!w-auto !text-white disabled:!text-gray-500'
            onClick={() => router.back()}
            // DISABLE WHILE LOADING
            disabled={loadingPost}
          >
            ยกเลิก
          </Button>
          {id && data.status == '3' ? null :
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              className='!w-full lg:!w-auto'
              // DISABLE WHILE LOADING
              loading={loadingPost}
            >
              บันทึก
            </Button>
          }
        </div>
      </section>
    </Form>
  )
}

export default React.memo(FormContent)
