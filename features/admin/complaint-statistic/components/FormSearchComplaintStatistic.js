import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col , Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FormSearchComplaintStatistic = (props) => {
  const { } = props

  const form = useForm({
    initialValues: {},
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
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={5} xl={7} xxl={5}>
          <Field.DatePicker
            label="สรุปข้อมูลการร้องเรียนวันที่:"
            name="date"
            placeholder="วว/ดด/ปปปป  -  วว/ดด/ปปปป"
            hideRequired
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={4} xxl={2}>
          <fieldset>
            <label className='block'>&nbsp;</label>
            <Button
              type="primary"
              size="large"
              icon={<SearchOutlined />}
              className="!w-full md:!w-auto lg:!w-auto xl:!w-auto 2xl:!w-auto bg-blue-600"
              >
              ค้นหา
            </Button>
          </fieldset>
        </Col>
      </Row>
    </Form>
  )
}

export default React.memo(FormSearchComplaintStatistic)
