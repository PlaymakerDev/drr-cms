import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getTop3_Progress } from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintProgress } from "./content";

const ComplaintProgress = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getTop3_Progress, reducerName: 'dashboard', reducerKey: 'top3_progress'
  })

  useEffect(() => {
    apiGetData('/api/v1/dashboard/top3_progress', data.search, false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintProgress
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

export default React.memo(ComplaintProgress);
