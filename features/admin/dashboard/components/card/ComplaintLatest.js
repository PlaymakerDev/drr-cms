import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getLatest_Complain , getAll_Latest_Complain} from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintLatest } from "./content";
import dayjs from "dayjs";

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getLatest_Complain, reducerName: 'dashboard', reducerKey: 'latest_complain'
  })

  const [apiGetComplain, loadingComplain, complain] = useGetAPI('overlay', {
    funcDispatch: getAll_Latest_Complain, reducerName: 'dashboard', reducerKey: 'all_latest_complain'
  })

  useEffect(() => {
    // const mock = '?dateSearch=2024-09-17'
    apiGetData('/api/v1/dashboard/latest_complain', { dateSearch: dayjs().format('YYYY-MM-DD') } , false, {})
    apiGetComplain('/api/v1/dashboard/all_latest_complain', { dateSearch: dayjs().format('YYYY-MM-DD') } , false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintLatest
          data={data.data}
          comp={complain}
        />
      )
    } else {
      return (
        <section className="h-40 flex items-center justify-center">
          <Spin spinning={loading} />
        </section>
      )
    }
  }, [data.data, loading])

  return (
    <Card className="min-h-[320px]">
      {renderContent}
    </Card>
  );
};

export default React.memo(ComplaintCurrent);
