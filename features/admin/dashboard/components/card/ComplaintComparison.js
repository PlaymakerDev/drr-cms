import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getCompare_Process_Close_2Years } from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintComparison } from "./content";

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getCompare_Process_Close_2Years, reducerName: 'dashboard', reducerKey: 'compare_process_close_2years'
  })

  useEffect(() => {
    apiGetData('/api/v1/dashboard/compare_process_close_2years', data.search , false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintComparison
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
