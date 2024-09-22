import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getTop3_Department_Complain } from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintDepartment } from "./content";

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getTop3_Department_Complain, reducerName: 'dashboard', reducerKey: 'top3_department_complain'
  })

  useEffect(() => {
    apiGetData('/api/v1/dashboard/top3_department_complain?dateSearch=2024-09-17', {} , false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintDepartment
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
