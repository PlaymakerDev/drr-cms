import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getCompare_Process_Close } from '@/store/features/dashboardSlice'
import { ContentComplaintProgressStat } from "./content";
// CONTENT

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getCompare_Process_Close, reducerName: 'dashboard', reducerKey: 'compare_process_close'
  })

  useEffect(() => {
    apiGetData('/api/v1/dashboard/compare_process_close', data.search , false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintProgressStat
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
