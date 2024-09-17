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
        <Row gutter={[16, 16]} align={'middle'}>
          <Col xs={24} sm={24} md={18} lg={18} xl={18} xxl={10}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">ค้นหาข้อมูลผู้ใช้งาน</Typography.Text>}
              name='username'
              placeholder=''
              hideRequired
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={6} xxl={4}>
            <fieldset>
              <label>&nbsp;</label>
              <Button
                type='primary'
                size='large'
                icon={<SearchOutlined />}
                // className='!w-full 2xl:!w-auto'
                // className='!w-full !bg-[#5671EE] hover:!bg-[#6c87ff] duration-200'
                className='!w-full'
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
