import React, { useCallback } from 'react'
import { Form, useForm, Field } from '@/components/form'
import { Row } from 'antd'

const FormSearchComplaintListing = (props) => {
  const { } = props

  const form = useForm({
    initialValue: {},
    rules: {},
  })

  const buildValue = useCallback((values, next) => {
    next(values)
  }, [])

  const handlerSubmit = useCallback((values) => {
    console.log(values)
  }, [])

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row></Row>
      <Row></Row>
    </Form>
  )
}

export default React.memo(FormSearchComplaintListing)
