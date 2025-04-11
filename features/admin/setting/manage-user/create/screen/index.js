import React, { useEffect, useState, useCallback, useMemo } from 'react'
import { Row, Col, Typography, Spin } from 'antd'
import { UserListSection, CreateUserSection } from '../components/content'
import { FormSearchUser } from '../components/form'

import { useRouter } from "next/router";
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { user_ldap_get } from "@/store/features/userSlice";

const INIT_USER = {
  username: '',
  prefix: '',
  name: '',
  first_name: '',
  last_name: ''
}

const CreateScreen = (props) => {
  const { } = props;
  const [open, setOpen] = useState()
  const [prefill, setPrefill] = useState(INIT_USER)
  const router = useRouter()

  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: user_ldap_get, reducerName: 'user', reducerKey: 'user_ldap_get'
  })

  useEffect(() => {
    apiGetData('/api/v1/user/search', { ...data?.search }, false, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    })
    
  }, [])

  const onChangePage = useCallback((page, perPage) => {
    apiGetData(`/api/v1/user/search`, { ...data.search, page: page, page_size: perPage }, false, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    })
  }, [apiGetData, data])

  const refreshContent = () => {
    apiGetData(`/api/v1/user/search`, data.search, false, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjMsInVzZXJuYW1lIjoic3VwZXJhZG1pbiIsInJvbGUiOjEwMCwiaWF0IjoxNzI4NjM2NTc4LCJleHAiOjE3Mjg4MDkzNzh9.0HHb0GUEII9RxgtxdQcZhtd_2-f3XHB9W3VFi2HHcqA"
      // },
    });
  };

  return (
    <>
      <section>
        <Typography.Title level={5} className='!m-0 !text-primary-color'>จัดการผู้ใช้งาน</Typography.Title>
      </section>
      <section className='mt-5'>
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
            <FormSearchUser
              apiGetData={apiGetData}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
            <UserListSection
              data={data?.data}
              loading={loading}
              //PAGE API
              page={data?.search?.page || 1}
              perPage={data?.search?.page_size || 10}
              total={data?.meta?.total || 0}
              onChange={onChangePage}
              // REFRESH
              refreshContent={refreshContent}
              // SET VALUE
              setPrefill={setPrefill}
            />
          </Col>
          <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
          <CreateUserSection initialValues={prefill} />
          </Col>
        </Row>
      </section>
    </>
  )
}

export default React.memo(CreateScreen)
