import React, { useCallback } from 'react'
import { useForm, Form } from '@/components/form'
import { Button, Divider } from 'antd'
import { ComplainantInformation, ComplaintContent, OperationProgress } from '../form'
import { useRouter } from 'next/router'

const FormContent = (props) => {
  const { } = props
  const router = useRouter()

  const form = useForm({
    initialValues: {
      info_source: '',
      accept_date: '',
      annonymous: false,
      first_name: '',
      last_name: '',
      phone_number: '',
      additional_info: '',
      category: '',
      complaint_type: '',
      province: '',
      district: '',
      sub_district: '',
      way: '',
      latitude: '',
      longitude: '',
      locale: '',
      report_department: '',
      document_number: '',
      complaint_file: [],
      end_date: '',
      instruction: '',
      operate_file: ''
    },
    rules: {},
  })

  const { values, errors } = form

  const buildValue = useCallback((values, next) => {
    next(values)
  }, [])

  const handlerSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <section>
        <ComplainantInformation
          values={values}
          errors={errors}
        />
      </section>
      <Divider className='!border-[#FFFFFF80]' />
      <section>
        <ComplaintContent
          values={values}
          errors={errors}
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
            className='!w-full lg:!w-auto !text-white'
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
        </div>
      </section>
    </Form>
  )
}

export default React.memo(FormContent)
