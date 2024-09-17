import React, { useCallback } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col, Button, Card, Typography } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const FormSearchComplaintListing = (props) => {
  const { } = props;
  const router = useRouter()

  const form = useForm({
    initialValues: {},
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
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">รายการรับเรื่องร้องเรียน</Typography.Title>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto'
            onClick={() => router.push('/admin/complaint-listing/create')}
          >
            เพิ่มข้อมูล
          </Button>
        </div>
      </section>
      <section className="mt-5">
        <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
          <Row gutter={[16, 16]} align={"middle"}>
            <Col xs={24} sm={24} md={24} lg={24} xl={8} xxl={6}>
              <Field.RangePicker
                label={<Typography.Text className="!text-primary-color">สรุปข้อมูลการร้องเรียนวันที่</Typography.Text>}
                name="date"
                placeholder="วว/ดด/ปปปป"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={4} xxl={3}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">เลขที่เอกสาร</Typography.Text>}
                name="document_number"
                placeholder="เลขที่เอกสาร"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={3}>
              <Field.Select
                label={<Typography.Text className="!text-primary-color">หมวดหมู่</Typography.Text>}
                name="category"
                placeholder="หมวดหมู่"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Select
                label={<Typography.Text className="!text-primary-color">ประเภท</Typography.Text>}
                name="type"
                placeholder="ประเภท"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Select
                label={<Typography.Text className="!text-primary-color">หน่วยงาน</Typography.Text>}
                name="agency"
                placeholder="หน่วยงาน"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={3}>
              <Field.Select
                label={<Typography.Text className="!text-primary-color">สถานะ</Typography.Text>}
                name="status"
                placeholder="สถานะ"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Input
                label={<Typography.Text className="!text-primary-color">แหล่งที่มา</Typography.Text>}
                name="source"
                placeholder="แหล่งที่มา"
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={2}>
              <fieldset>
                <label className='block'>&nbsp;</label>
                <Button
                  type="primary"
                  size="large"
                  icon={<SearchOutlined />}
                  className="!w-full"
                >
                  ค้นหา
                </Button>
              </fieldset>
            </Col>
          </Row>
        </Form>
      </section>
    </>
  );
};

export default React.memo(FormSearchComplaintListing);
