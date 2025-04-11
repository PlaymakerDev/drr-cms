import React, { useState, useEffect, useCallback } from "react";
import { Button, Typography } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { TableManageInformation } from '../components/table'
import { ModalCreateInformation } from '../components/modal'
import useGetAPI from "@/utils/hooks/api/useGetAPI";
import { getSourceType, getSourceTypeDetail } from "@/store/features/settingSlice";


const INIT_MODAL = { open: false, edit: false, info: {} }

const ManageInformationScreen = (props) => {
  const { } = props
  const [open, setOpen] = useState(INIT_MODAL)
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: getSourceType,
    reducerName: 'setting',
    reducerKey: 'source_type'
  })
  // const [apiGetDetail, loadingdetail, detail] = useGetAPI('overlay', {
  //   funcDispatch: getSourceTypeDetail, 
  //   reducerName: 'setting', 
  //   reducerKey: 'source_type'
  // })
  useEffect(() => {
    apiGetData("/api/v1/source_type", {}, false, {
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onReload = useCallback(async () => {
    // Function to create a delay
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    // Delay for 2 seconds before making the API call
    await delay(100);

    // Now call the API
    await apiGetData("/api/v1/source_type", {}, false, {});
  }, [apiGetData]);


  const [apiGetDetail, loadingdetail, detail] = useGetAPI('overlay', {
    funcDispatch: getSourceTypeDetail,
    reducerName: 'setting',
    reducerKey: 'source_type'
  }, [])

  const openModal = useCallback(async (open, data) => {
    const response = await apiGetDetail(`/api/v1/source_type/${data.mas_id}`, {}, false, {
      // headers: {
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    })
    if (response?.sucess) {
      setOpen({
        open: true,
        info: response?.data,
        edit: true
      })
    } else {
    }
  }, [apiGetDetail])


  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">จัดการแหล่งที่มาข้อมูล</Typography.Title>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto'
            onClick={() => setOpen({ open: true, edit: false, info: {} })}
          >
            เพิ่มข้อมูลแหล่งที่มา
          </Button>
        </div>
      </section>
      <section className='mt-5'>
        {
          !loading ? <TableManageInformation
            setOpen={setOpen}
            data={data}
            onReload={onReload}
            openModal={openModal}
            loading={loading}
          /> : <Typography.Title level={1} className="!text-white flex justify-center items-center"></Typography.Title>
        }

      </section>
      <ModalCreateInformation
        open={open.open}
        info={open.info}
        edit={open.edit}
        setOpen={setOpen}
        onReload={onReload}
      />
    </div>
  )
}

export default React.memo(ManageInformationScreen)
