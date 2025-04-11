import React, { useCallback, useState, useContext } from "react";
import { Form, useForm, Field } from "@/components/form";
import { Row, Col, Button, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import dayjs from 'dayjs'
import 'dayjs/locale/th'
import buddhistEra from 'dayjs/plugin/buddhistEra'
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(buddhistEra)
dayjs.extend(customParseFormat);  
import { DateContext } from "../screen";

const FormSearchComplaintStatistic = (props) => {
  const { initialValues, apiGetData, apiGetServiceProgress, apiGetDeComplaint, deComplaintData } = props;
  const { setDateRange } = useContext(DateContext)
  const form = useForm({
    initialValues: {
      dates: [dayjs(), dayjs()]
    },
    rules: {},
  });

  const buildValue = useCallback((values, next) => {
    const body = {
      startDateSearch: dayjs(values.dates[0]).format('YYYY-MM-DD'),
      endDateSearch: dayjs(values.dates[1]).format('YYYY-MM-DD'),
    }
    next(body);
  }, []);

  const handlerSubmit = useCallback((values) => {
    setDateRange([values.startDateSearch, values.endDateSearch])
    apiGetData('/api/v1/dashboard/all_complain', { ...values }, false, {})
    apiGetServiceProgress('/api/v1/dashboard/progress_by_date_range', { ...values }, false, {})
    apiGetDeComplaint('/api/v1/dashboard/department_complain', { ...deComplaintData.department_complain.search, ...values }, false, {})
  }, [apiGetData, apiGetServiceProgress, apiGetDeComplaint, setDateRange, deComplaintData])

  return (
    <Form form={form} handlerSubmit={[buildValue, handlerSubmit]}>
      <Row gutter={[16, 16]} align={"middle"}>
        <Col xs={24} sm={24} md={12} lg={5} xl={7} xxl={5}>
          <Field.RangePicker
            label={
              <Typography.Text className="!text-primary-color">
                สรุปข้อมูลการร้องเรียนวันที่:
              </Typography.Text>
            }
            name="dates"
            hideRequired
            format={"DD MMM BBBB"}

          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={2} xl={4} xxl={2}>
          <fieldset>
            <label className="block">&nbsp;</label>
            <Button
              htmlType="submit"
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
  );
};

export default React.memo(FormSearchComplaintStatistic);
