import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col , Button , Card } from "antd";
import { SearchOutlined , PlusOutlined } from "@ant-design/icons";
const FormSearchUsersetting = (props) => {
  const {} = props;

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
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={4}>
          <Field.Input
            label="ค้นหาข้อมูลผู้ใช้งาน"
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
              className="!w-full md:!w-auto lg:!w-auto xl:!w-auto 2xl:!w-auto"
            >
              ค้นหา
            </Button>
          </fieldset>
        </Col>
        <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={18} className='!text-right'>
            <fieldset>
              <label className='block'>&nbsp;</label>
              <Button
                type='primary'
                size='large'
                icon={<PlusOutlined />}
                className='!w-full lg:!w-auto xl:!w-auto 2xl:!w-auto'
              >
                เพิ่มข้อมูลผู้ใช้งาน
              </Button>
            </fieldset>
          </Col>
      </Row>
    </Form>
  </Card>
  );
};

export default React.memo(FormSearchUsersetting);
