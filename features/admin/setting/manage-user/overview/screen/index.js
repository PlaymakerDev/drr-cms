import React, { useEffect, useState, useCallback } from "react";
import { Button, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { TableUser } from "../components/table";
import { FormSearchUser } from "../components/form";
import { ModalUser } from "../components/modal";
import { useRouter } from "next/router";
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { user_get } from "@/store/features/userSlice";

const INIT_MODAL = { open: false ,info:null }

const OverviewScreen = (props) => {
  const { } = props;
  const [open, setOpen] = useState(INIT_MODAL)
  const router = useRouter()

  const [apiGetData, loading, data] = useGetAPI('overlay', { funcDispatch: user_get, reducerName: 'user', reducerKey: 'user_get' })
  useEffect(() => {
    apiGetData('/api/v1/user/findUser', { ...data.search }, false, {})
  }, [])

  const onChangePage = useCallback((page, perPage) => {
    apiGetData('/api/v1/user/findUser', { ...data.search , page: page, limit: perPage }, false, {})
  }, [apiGetData, data])

  const refreshContent = () => {
    apiGetData('/api/v1/user/findUser', { ...data.search }, false, {})
  };

  const searchData = (keyword) =>{
    apiGetData('/api/v1/user/findUser', { ...data.search ,username:keyword}, false, {})
  }

  return (
    <div>
      <section>
        <div className="flex flex-wrap justify-between items-center gap-5">
          <Typography.Title level={5} className="!text-primary-color !m-0">จัดการผู้ใช้งาน</Typography.Title>
          <Button
            type='primary'
            size='large'
            icon={<PlusOutlined />}
            className='!w-full lg:!w-auto'
            onClick={() => router.push('/admin/setting/manage-user/create')}
          >
            เพิ่มข้อมูลผู้ใช้งาน
          </Button>
        </div>
      </section>
      <section className="mt-5">
        <FormSearchUser
          searchData={searchData}
        />
      </section>
      <section className='mt-5'>
        <TableUser
          setOpen={setOpen}
          data={data}
          loading={loading}
          //PAGE API
          page={data?.search?.page || 1}
          perPage={data?.search?.limit || 10}
          total={data?.meta?.totalItems || 0}
          onChange={onChangePage}
          // REFRESH
          refreshContent={refreshContent}
        />
      </section>
      <ModalUser
        open={open?.open}
        setOpen={setOpen}
        data={open?.info}
        onReload={refreshContent}
      />
    </div>
  )
}

export default OverviewScreen
