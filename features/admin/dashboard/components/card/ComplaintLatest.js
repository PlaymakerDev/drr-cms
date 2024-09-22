import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getLatest_Complain } from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintLatest } from "./content";

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getLatest_Complain, reducerName: 'dashboard', reducerKey: 'latest_complain'
  })

  useEffect(() => {
    // const mock = '?dateSearch=2024-09-17'
    apiGetData('/api/v1/dashboard/latest_complain?dateSearch=2024-09-17', {} , false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintLatest
          data={data.data}
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
    <Card>
      {renderContent}
    </Card>
  );
};

export default React.memo(ComplaintCurrent);
