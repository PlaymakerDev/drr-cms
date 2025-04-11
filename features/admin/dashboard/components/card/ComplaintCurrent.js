import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import { getTop3Complain } from "@/store/features/dashboardSlice";
import { getAll_Complain } from "@/store/features/complaintStatisticSlice";
import { getSourceType } from "@/store/features/settingSlice";
// CONTENT
import { ContentComplaintCurrent } from "./content";
import dayjs from "dayjs";

const ComplaintCurrent = (props) => {
  const { } = props;

  const [apiGetData, loading, data] = useGetAPI("overlay", {
    funcDispatch: getTop3Complain,
    reducerName: "dashboard",
    reducerKey: "top3_complain",
  });

  const [apiGetComplain, loadingComplain, complain] = useGetAPI("overlay", {
    funcDispatch: getAll_Complain,
    reducerName: "complaintStatistic",
    reducerKey: "all_complain",
  });

  const [apiGetLogo, loadingLogo, logo] = useGetAPI("overlay", {
    funcDispatch: getSourceType,
    reducerName: "setting",
    reducerKey: "source_type",
  });

  useEffect(() => {
    // const mock = '?dateSearch=2024-09-17'
    apiGetData("/api/v1/dashboard/top3_complain", { dateSearch: dayjs().format('YYYY-MM-DD') }, false, {
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });
    apiGetComplain("/api/v1/dashboard/all_complain", { startDateSearch: dayjs().format('YYYY-MM-DD'), endDateSearch: dayjs().format('YYYY-MM-DD') }, false, {
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });
    //dateSearch: dayjs().format('YYYY-MM-DD')
    apiGetLogo("/api/v1/source_type", {  }, false, {
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = useMemo(() => {
    if (!loading) {
      return <ContentComplaintCurrent data={data.data} datacomplain={complain.data} Detail={logo.overview.data} />;
    } else {
      return (
        <section className="h-40 flex items-center justify-center">
          <Spin spinning={loading} />
        </section>
      );
    }
  }, [data.data, loading, complain, logo]);

  return <Card className="!min-h-[265px] !w-full">{renderContent}</Card>;
};

export default React.memo(ComplaintCurrent);
