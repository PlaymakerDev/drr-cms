import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col , Button , Card, Typography } from "antd";
import { SearchOutlined , PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
const FormSearchUsersetting = (props) => {
  const {} = props;
  const router = useRouter()

  const form = useForm({
    initialValue: {},
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    next(values);
  }, []);

  const handlerSubmit = useCallback((values) => {
    console.log(values);
  }, []);

  return (
  <Card className="bg-transparent border-0">
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
    <Row align="middle" justify="space-between" gutter={16 } className="mb-4">
        <Col>
          <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
          จัดการผู้ใช้งาน
          </Typography.Title>
        </Col>
        <Col>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto xl:!w-auto 2xl:!w-auto !bg-custom-blue'
            onClick={() => router.push('/admin/setting/create')}
            >
            เพิ่มข้อมูลผู้ใช้งาน
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={4}>
          <Field.Input
            label={<span className="text-white-label">ค้นหาข้อมูลผู้ใช้งาน</span>}
            name="user_name"
            placeholder=""
            hideRequired
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={2} xxl={2}>
          <fieldset>
            <label className='block'>&nbsp;</label>
            <Button
              type="primary"
              size="large"
              icon={<SearchOutlined />}
              className="!w-full md:!w-auto lg:!w-auto xl:!w-auto 2xl:!w-auto !bg-custom-blue"
            >
              ค้นหา
            </Button>
          </fieldset>
        </Col>
      </Row>
    </Form>
  </Card>
  );
};

export default React.memo(FormSearchUsersetting);