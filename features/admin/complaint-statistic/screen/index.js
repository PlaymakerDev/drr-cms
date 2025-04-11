import React, { useEffect, createContext, useState } from "react";
import { FormSearchComplaintStatistic } from "../components";
import { Top, Bottom } from "../components/section";
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import {
  getAll_Complain,
  getCompare_Process_Close_Of_ComplainForComplain,
  getCompare_Process_Close_Of_ComplainForService,
  getProgress_by_date_range,
  getDepartment_complain,

} from "@/store/features/complaintStatisticSlice";
import { getSourceType } from "@/store/features/settingSlice";

import dayjs from "dayjs";

export const DateContext = createContext();

const ComplaintStatisticScreen = (props) => {
  const { } = props;

  const [dateRange, setDateRange] = useState([dayjs().format("YYYY-MM-DD"),dayjs().format("YYYY-MM-DD")]);

  const [apiGetData, loading, data] = useGetAPI("overlay", {
    funcDispatch: getAll_Complain,
    reducerName: "complaintStatistic",
    reducerKey: "all_complain",
  },);

  const [apiGetComplain, loadingComplain, complain] = useGetAPI('overlay', {
    funcDispatch: getCompare_Process_Close_Of_ComplainForComplain,
    reducerName: 'complaintStatistic',
    reducerKey: 'compare_process_close_of_complain'
  })

  const [apiGetService, loadingService, service] = useGetAPI('overlay', {
    funcDispatch: getCompare_Process_Close_Of_ComplainForService,
    reducerName: 'complaintStatistic',
    reducerKey: 'compare_process_close_of_complain'
  })

  const [apiGetServiceProgress, loadingProgress, serviceprogress] = useGetAPI('overlay', {
    funcDispatch: getProgress_by_date_range,
    reducerName: 'complaintStatistic',
    reducerKey: 'request_service'
  })

  const [apiGetDeComplaint, loadingDeComplaint, DeComplaint] = useGetAPI('overlay', {
    funcDispatch: getDepartment_complain,
    reducerName: 'complaintStatistic',
    reducerKey: 'request_service'
  })

  const [apiGetLogo, loadingLogo, logo] = useGetAPI("overlay", {
    funcDispatch: getSourceType,
    reducerName: "setting",
    reducerKey: "source_type",
  });

  useEffect(() => {
    apiGetData("/api/v1/dashboard/all_complain", { ...data.search, startDateSearch: dayjs().format('YYYY-MM-DD'), endDateSearch: dayjs().format('YYYY-MM-DD') }, false, {});
    apiGetServiceProgress("/api/v1/dashboard/progress_by_date_range", { ...serviceprogress.progress_by_date_range.search, startDateSearch: dayjs().format('YYYY-MM-DD'), endDateSearch: dayjs().format('YYYY-MM-DD') }, false, {});
    apiGetDeComplaint("/api/v1/dashboard/department_complain", { ...DeComplaint.department_complain.search, startDateSearch: dayjs().format('YYYY-MM-DD'), endDateSearch: dayjs().format('YYYY-MM-DD'), deptType: "1" }, false, {});
    apiGetLogo("/api/v1/source_type", {  }, false, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    apiGetComplain("/api/v1/dashboard/compare_process_close_of_complain", { ...data.search, category_type: '1' }, false, {});
    apiGetService("/api/v1/dashboard/compare_process_close_of_complain", { ...data.search, category_type: '2' }, false, {});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.search])

  return (
    <DateContext.Provider value={{ setDateRange }}>
      <section>
        <FormSearchComplaintStatistic
          initialValues={data.search}
          apiGetData={apiGetData}
          apiGetServiceProgress={apiGetServiceProgress}
          apiGetDeComplaint={apiGetDeComplaint}
          deComplaintData={DeComplaint}
        />
      </section>
      <section className="mt-4">
        <Top
          dateRange={dateRange}
          data={data.data}
          logo={logo.overview.data}
        />
      </section>
      <section className="mt-4">
        <Bottom
          complaindata={complain.complain.data}
          servicedata={service.service.data}
          apiGetServiceProgress={serviceprogress}
          apiGetDeComplaint={[apiGetDeComplaint, DeComplaint]}
        />
      </section>
    </DateContext.Provider>
  );
};

export default React.memo(ComplaintStatisticScreen);
