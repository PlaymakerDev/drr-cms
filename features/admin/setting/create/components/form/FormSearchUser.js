import React, { useCallback } from "react";
import { Form, Field, useForm } from "@/components/form";
import { Button, Card, Col, Row, Typography } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";

const FormSearchUser = (props) => {
  const { } = props;

  const form = useForm({
    initialValues: {
      username: '',
    },
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    next(values);
  }, []);

  const handlerSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <>
      <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
        <Row gutter={[16, 16]} align={'middle'} className="mt-6 mb-3">
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={6}>
            <Field.Input
              label={<span className="text-white-label">ค้นหาข้อมูลผู้ใช้งาน</span>}
              name='search_user'
              placeholder=''
              hideRequired
            />
          </Col>
          <Col xs={24} sm={12} md={12} lg={12} xl={6} xxl={2}>
            <fieldset>
              <label>&nbsp;</label>
              <Button
                type='primary'
                size='large'
                icon={<SearchOutlined />}
                // className='!w-full 2xl:!w-auto'
                className='!w-full '
              >
                ค้นหา
              </Button>
            </fieldset>
          </Col>
        </Row>
      </Form>
      <Typography.Text className="!text-[#FF4A4A]">**กรุณาค้นหาด้วยชื่อ หรือ Username</Typography.Text>
    </>
  );
};

export default React.memo(FormSearchUser);
