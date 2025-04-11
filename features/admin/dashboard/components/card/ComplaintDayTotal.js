import React, { useEffect, useMemo } from "react";
import { Card, Spin } from "antd";
// API
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getCount_Complaints } from '@/store/features/dashboardSlice'
import { getSourceType } from "@/store/features/settingSlice";
// CONTENT
import { ContentComplaintDayTotal } from "./content";
import dayjs from "dayjs";

const ComplaintCurrent = (props) => {
  const { } = props;
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getCount_Complaints, reducerName: 'dashboard', reducerKey: 'count_complaints'
  })

  const mockData = {
    "series": [
      // 1,2,3,
      9, 4, 1, 1, 2, 0, 2, 0, 0,
      // 9, 4, 1, 1, 2, 0, 2, 0, 0,
      // 9,4,1,1,2,0,2,0,0,
      // 9,4,1,1,2,0,2,0,0,

    ],
    "labels": [
      // "สายด่วน 1146", "หน่วยงานภายในกรมทางหลวงชนบท", "Facebook", 
      "Really Cool", "หน่วยงานภายในกรมทางหลวงชนบท", "Facebook", "หน่วยงานของภาครัฐ", "หน่วยงานของภาคเอกชน", "ทราฟฟี่ฟองดูว์ (Traffy Fondue)", "เว็บไซต์กรมทางหลวงชนบท (www.drr.go.th)", "เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี", "เว็บไซต์กระทรวงคมนาคม",
      // "สายด่วน 1146", "หน่วยงานภายในกรมทางหลวงชนบท", "Facebook", "หน่วยงานของภาครัฐ", "หน่วยงานของภาคเอกชน", "ทราฟฟี่ฟองดูว์ (Traffy Fondue)", "เว็บไซต์กรมทางหลวงชนบท (www.drr.go.th)", "เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี", "เว็บไซต์กระทรวงคมนาคม",
      // "สายด่วน 1146","หน่วยงานภายในกรมทางหลวงชนบท","Facebook","หน่วยงานของภาครัฐ","หน่วยงานของภาคเอกชน","ทราฟฟี่ฟองดูว์ (Traffy Fondue)","เว็บไซต์กรมทางหลวงชนบท (www.drr.go.th)","เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี","เว็บไซต์กระทรวงคมนาคม",
      // "สายด่วน 1146","หน่วยงานภายในกรมทางหลวงชนบท","Facebook","หน่วยงานของภาครัฐ","หน่วยงานของภาคเอกชน","ทราฟฟี่ฟองดูว์ (Traffy Fondue)","เว็บไซต์กรมทางหลวงชนบท (www.drr.go.th)","เว็บไซต์สำนักงานปลัดสำนักนายกรัฐมนตรี","เว็บไซต์กระทรวงคมนาคม",

    ]
  }

  const [apiGetLogo, loadingLogo, logo] = useGetAPI("overlay", {
    funcDispatch: getSourceType,
    reducerName: "setting",
    reducerKey: "source_type",
  });

  useEffect(() => {
    apiGetData('/api/v1/dashboard/count_complaints', { dateSearch: dayjs().format('YYYY-MM-DD') }, false, {})
    apiGetLogo("/api/v1/source_type", {}, false, {});
  }, [])

  console.log('data.data', data.data);
  console.log('logo.overview.data', logo.overview.data);
  const renderContent = useMemo(() => {
    if (!loading) {
      return (
        <ContentComplaintDayTotal
          // data={data.data}
          data={data.data}
          logo={logo.overview.data}
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
