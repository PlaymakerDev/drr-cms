import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getCount_Complain_Type } from '@/store/features/dashboardSlice'
// CONTENT
import { ContentComplaintType } from "./content";
import dayjs from "dayjs";


const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getCount_Complain_Type, reducerName: 'dashboard', reducerKey: 'count_complain_type'
  })

  useEffect(() => {

    apiGetData('/api/v1/dashboard/count_complain_type', { dateSearch: dayjs().format('YYYY-MM-DD') } , false, {})

  }, [])

  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintType
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
    <Card >
      {renderContent}
    </Card>
  );
};

export default React.memo(ComplaintCurrent);
