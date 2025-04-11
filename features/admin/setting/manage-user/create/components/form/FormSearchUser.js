import React, { useCallback } from "react";
import { Form, Field, useForm } from "@/components/form";
import { Button, Col, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const FormSearchUser = (props) => {
  const { apiGetData } = props;

  const form = useForm({
    initialValues: {
      username: '',
    },
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    const body = {
      keyword: values.username
    }
    next(body);
  }, []);

  const handlerSubmit = useCallback((values) => {
    apiGetData('/api/v1/user/search', values, false);
  }, [apiGetData]);

  const usernameValue = form.values.username; 

  return (
    <>
      <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
        <Row gutter={[16, 0]} align={'middle'}>
          <Col xs={24} sm={24} md={18} lg={18} xl={9} xxl={5}>
            <Field.Input
              label={<Typography.Text className="!text-primary-color">ค้นหาข้อมูลผู้ใช้งาน</Typography.Text>}
              name='username'
              placeholder=''
              hideRequired
            />
          </Col>
          <Col xs={24} sm={24} md={6} lg={6} xl={3} xxl={2}>
            <fieldset>
              <label>&nbsp;</label>
              <Button
                htmlType="submit"
                type='primary'
                size='large'
                icon={<SearchOutlined />}
                className='!w-full'
              >
                ค้นหา
              </Button>
            </fieldset>
          </Col>
        </Row>
      </Form>
      {!usernameValue && (
        <Typography.Text className="!text-[#FF4A4A]">กรุณาค้นหาด้วยชื่อ หรือ Username</Typography.Text>
      )}
    </>
  );
};

export default React.memo(FormSearchUser);
