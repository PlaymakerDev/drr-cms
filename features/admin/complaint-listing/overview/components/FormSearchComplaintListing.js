import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col , Button , Card, Typography } from "antd";
import { SearchOutlined , PlusOutlined } from "@ant-design/icons";
const FormSearchComplaintListing = (props) => {
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
        <Row align="middle" justify="space-between" gutter={16 } className="mb-4">
        <Col>
          <Typography.Title level={4} className="!text-[#FFFFFF] mb-0">
          รายการรับเรื่องร้องเรียน
          </Typography.Title>
        </Col>
        <Col>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto xl:!w-auto 2xl:!w-auto '
            >
            เพิ่มข้อมูลผู้ใช้งาน
          </Button>
        </Col>
      </Row>
      <Row gutter={[16, 16]} align={"middle"}>
      <Col xs={4} sm={8} md={8} lg={12} xl={16} xxl={6}>
          <Field.RangePicker
            label="สรุปข้อมูลการร้องเรียนวันที่ :"
            name="date"
            placeholder="วว/ดด//ปปปป"
            className="!w-30"
            hideRequired
          />
        </Col>
        <Col xs={4} sm={8} md={8} lg={12} xl={16} xxl={3}>
          <Field.Input
            label="เลขเอกสาร :"
            name="input"
            placeholder="เลขเอกสาร"
            hideRequired
          />
        </Col>
        <Col xs={4} sm={8} md={8} lg={12} xl={16} xxl={3}>
          <Field.Select
            label="หมวดหมู่ :"
            name="category"
            placeholder="หมวดหมู่"
            hideRequired
          />
        </Col>
        <Col xs={4} sm={8} md={8} lg={12} xl={16} xxl={6}>
          <Field.Select
            label="ประเภท :"
            name="date"
            placeholder="ประเภท"
            hideRequired
          />
        </Col>
        <Col xs={4} sm={8} md={8} lg={12} xl={16} xxl={6}>
          <Field.Select
            label="หน่วยงาน :"
            name="agency"
            placeholder="หน่วยงาน"
            hideRequired
          />
        </Col>
            </Row>
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={3}>
          <Field.Select
            label="ค้นหาข้อมูลผู้ใช้งาน"
            name="user_name"
            placeholder=""
            hideRequired
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={6} xl={6} xxl={6}>
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

export default React.memo(FormSearchComplaintListing);
