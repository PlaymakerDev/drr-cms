import React, { useCallback, useEffect, useState } from 'react'
import { Button, Typography } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import { TableManageReport } from '../components/table';
import { ModalEditReport } from '../components/modal';
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { getReport } from '@/store/features/settingSlice';
import usePostAPI from '@/utils/hooks/api/usePostAPI';

const INIT_MODAL = { open: false, info: {}, index: 0 };

const ManageReportScreen = () => {

  const [open, setOpen] = useState(INIT_MODAL);

  const [apiPost, loadingPost] = usePostAPI()

  const [apiGetReport, loadingReport, Report] = useGetAPI('overlay', {
    funcDispatch: getReport, reducerName: 'setting', reducerKey: 'report'
  })

  useEffect(() => {
    apiGetReport('/api/v1/report-certifier', {}, false, {})
  }, [])

  const loading = false

  const onReload = useCallback(async () => {
    apiGetReport('/api/v1/report-certifier', {}, false, {})
    console.log('reload')
  }, [])

 
  // const mockTableData = Report.data

  // console.log('get report',Report?.data)

  // const test = (id) =>{
  //   console.log("hello",id)
  // }

  // const mockTableData = [
  //   {
  //     reportId: 1,
  //     reportName: "แบบรับเรื่องร้องเรียน",
  //     reportCertificate: 'นายสิทธิศักดิ์ จันทะคุณ',
  //     reportCertificateRole: 'ผู้อำนวยการกลุ่มบริหารข้อมูลข่าวสารและเรื่องราวร้องทุกข์'
  //   },
  //   {
  //     reportId: 2,
  //     reportName: "รายงานและสรุปผลการดำเนินงานเรื่องร้องเรียนร้องทุกข์",
  //     reportCertificate: 'นายโกศล จันมนฑา',
  //     reportCertificateRole: 'วิศกรโยธาชำนาญการพิเศษ ปฏิบัติหน้าที่ เลขานุการกรม'
  //   }

  // ]


  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">
            การจัดการรายงาน
          </Typography.Title>
        </div>
      </section>
      <section className="mt-5">
        <TableManageReport setOpen={setOpen} data={Report?.data} loading={loading} onReload={onReload} />
      </section>
      <ModalEditReport
        open={open.open}
        info={open.info}
        setOpen={setOpen}
        onReload={onReload}
        tableData={Report?.data}
        // updateReportModal={updateReportModal}
        // test={test}
/>
    </div>
  )
}

export default ManageReportScreen
