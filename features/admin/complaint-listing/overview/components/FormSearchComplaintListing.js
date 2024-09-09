import React, { useCallback } from 'react'
import { Form, useForm, Field } from '@/components/form'

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
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>index</Form>
  )
}

export default React.memo(FormSearchComplaintListing)
