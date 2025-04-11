import React, { useCallback } from "react";
import { Form, Field, useForm } from "@/components/form";
import { Button, Col, Row, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const FormSearchUser = (props) => {
  const { searchData } = props;

  const form = useForm({
    initialValues: {
      user: '',
    },
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    const body = {
      username : values.user,
      page:1
    }
    next(body);
  }, []);

  const handlerSubmit = useCallback(async (values) => {
    await searchData(values.username)
  }, []);

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row gutter={[16, 16]} align={'middle'}>
        <Col xs={24} sm={18} md={18} lg={8} xl={8} xxl={5}>
          <Field.Input
            label={<Typography.Text className="!text-primary-color">ค้นหาข้อมูลผู้ใช้งาน</Typography.Text>}
            name='user'
            placeholder=''
            hideRequired
          />
        </Col>
        <Col xs={24} sm={6} md={6} lg={4} xl={4} xxl={2}>
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
  );
};

export default React.memo(FormSearchUser);
