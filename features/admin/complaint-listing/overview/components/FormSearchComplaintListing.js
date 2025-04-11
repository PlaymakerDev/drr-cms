import React, { useCallback, useEffect } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col, Button, Card, Typography } from "antd";
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  
import {
  getDepartment,
  getDropdownCategoryType,
  getDropdownComplaintType,
  getDropdownSourceType,
  clearDropdownComplaintType,
} from "@/store/features/masterSlice";
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import { useAppDispatch } from "@/store/hooks";

const FormSearchComplaintListing = (props) => {
  const { initialValues, apiGetData, query } = props;
  const router = useRouter();
  const dispatch = useAppDispatch();
  // API GET DATA
  const [apiGetDepartment, loadingDepartment, department] = useGetAPI(
    "overlay",
    {
      funcDispatch: getDepartment,
      reducerName: "master",
      reducerKey: "department",
    }
  );

  const [apiGetCategoryType, loadingCategoryType, categoryType] = useGetAPI(
    "overlay",
    {
      funcDispatch: getDropdownCategoryType,
      reducerName: "master",
      reducerKey: "dropdown",
    }
  );

  const [apiGetComplaintType, loadingComplaintType, complaintType] = useGetAPI(
    "overlay",
    {
      funcDispatch: getDropdownComplaintType,
      reducerName: "master",
      reducerKey: "dropdown",
    }
  );

  const [apiGetSourceType, loadingSourceType, sourceType] = useGetAPI(
    "overlay",
    {
      funcDispatch: getDropdownSourceType,
      reducerName: "master",
      reducerKey: "dropdown",
    }
  );

  const form = useForm({
    initialValues: {
      date: [dayjs(query?.startDate) , dayjs(query?.endDate)] || [],
      source_type: query?.mas_code || "",
      notified_office: "",
      complaint_type: "",
      category_type: "",
      status: "",
      document: "",
    },
    rules: {},
  });

  const { values, handlerChange } = form;

  const buildValue = useCallback((values, next) => {
    const body = {
      startDate: dayjs(values.date[0]).format("YYYY-MM-DD"),
      endDate: dayjs(values.date[1]).format("YYYY-MM-DD"),
      document: values.document,
      category_type: values.category_type,
      complaint_type: values.complaint_type,
      notified_office: values.notified_office,
      status: values.status,
      source_type: values.source_type,
    };
    next(body);
  }, []);

  const handlerSubmit = useCallback(
    (values) => {
      apiGetData(`/api/v1/complaints`, {
        ...values,
        page: 1,
        page_size: initialValues.page_size,
      });
    },
    [apiGetData, initialValues]
  );

  useEffect(() => {
    apiGetDepartment("/api/v1/department/master/department", {}, false, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    apiGetCategoryType("/api/v1/complaints/master/dropdown", {
      ...categoryType.category_type.search,
      mas_group_code: "1",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (values.category_type) {
      const COMPLAINT_ID = {
        1: "2",
        2: "3",
      };
      apiGetComplaintType("/api/v1/complaints/master/dropdown", {
        ...complaintType.complaint_type.search,
        mas_group_code: COMPLAINT_ID[values.category_type],
      });
    }
    dispatch(clearDropdownComplaintType({ data: [] }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.category_type]);

  useEffect(() => {
    apiGetSourceType("/api/v1/complaints/master/dropdown", {
      ...sourceType.source_type.search,
      mas_group_code: "4",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">
            รายการรับเรื่องร้องเรียน
          </Typography.Title>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            className="!w-full lg:!w-auto !bg-[#43BE6D] hover:!bg-[#55ee88]"
            onClick={() => router.push("/admin/complaint-listing/create")}
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
                label={
                  <Typography.Text className="!text-primary-color">
                    สรุปข้อมูลการร้องเรียนวันที่
                  </Typography.Text>
                }
                name="date"
                placeholder="วว/ดด/ปปปป"
                format={["DD MMM BBBB", "DD MMM BBBB"]}
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={4} xxl={3}>
              <Field.Input
                label={
                  <Typography.Text className="!text-primary-color">
                    เลขที่เอกสาร
                  </Typography.Text>
                }
                name="document"
                placeholder="เลขที่เอกสาร"
                hideRequired
                allowClear
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={3}>
              <Field.Select
                label={
                  <Typography.Text className="!text-primary-color">
                    หมวดหมู่
                  </Typography.Text>
                }
                name="category_type"
                placeholder="ทั้งหมด"
                optKeys={["mas_code", "mas_name"]}
                options={categoryType.category_type.data || []}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(name, value) => {
                  dispatch(clearDropdownComplaintType({ data: [] }));
                  handlerChange({
                    [name]: value,
                    complaint_type: "",
                  });
                }}
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Select
                label={
                  <Typography.Text className="!text-primary-color">
                    ประเภท
                  </Typography.Text>
                }
                name="complaint_type"
                placeholder="ทั้งหมด"
                optKeys={["mas_code", "mas_name"]}
                options={complaintType.complaint_type.data || []}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(name, value) => {
                  handlerChange({
                    [name]: value,
                  });
                }}
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Select
                label={
                  <Typography.Text className="!text-primary-color">
                    หน่วยงาน
                  </Typography.Text>
                }
                name="notified_office"
                placeholder="ทั้งหมด"
                optKeys={["deptofficeno", "deptname"]}
                options={department.data || []}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(name, value) => {
                  handlerChange({
                    [name]: value,
                  });
                }}
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={3}>
              <Field.Select
                label={
                  <Typography.Text className="!text-primary-color">
                    สถานะ
                  </Typography.Text>
                }
                name="status"
                placeholder="ทั้งหมด"
                optKeys={["value", "label"]}
                options={[
                  {
                    label: "รับเรื่อง",
                    value: "1",
                  },
                  {
                    label: "กำลังดำเนินการ",
                    value: "2",
                  },
                  {
                    label: "ยุติ",
                    value: "3",
                  },
                ]}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={12} lg={12} xl={6} xxl={6}>
              <Field.Select
                label={
                  <Typography.Text className="!text-primary-color">
                    แหล่งที่มา
                  </Typography.Text>
                }
                name="source_type"
                placeholder="ทั้งหมด"
                optKeys={["mas_code", "mas_name"]}
                options={sourceType.source_type.data || []}
                allowClear
                showSearch
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
                onChange={(name, value) => {
                  handlerChange({
                    [name]: value,
                  });
                }}
                hideRequired
              />
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6} xxl={2}>
              <fieldset>
                <label className="block">&nbsp;</label>
                <Button
                  htmlType="submit"
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
