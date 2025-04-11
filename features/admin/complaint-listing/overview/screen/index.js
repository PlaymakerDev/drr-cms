import React, { useEffect, useCallback } from 'react'
import { FormSearchComplaintListing, TableComplaintListing } from '../components'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { complaints_get } from '@/store/features/complaintListingSlice'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

const OverviewScreen = (props) => {
  const { } = props
  // USE ROUTER
  const router = useRouter()
  // USE GET API
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: complaints_get, reducerName: 'complaintListing', reducerKey: 'complaints_get'
  })

  // GET DATA
  useEffect(() => {
    apiGetData('/api/v1/complaints', {
      ...data.search,
      startDate: router?.query?.startDate ? dayjs(router?.query?.startDate).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      endDate: router?.query?.endDate ? dayjs(router?.query?.endDate).format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
      source_type: router?.query?.mas_code || ''
    }, false, {})
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onChangePage = useCallback((page, perPage) => {
    apiGetData(`/api/v1/complaints`, { ...data.search, page: page, page_size: perPage }, false, {})
  }, [apiGetData, data])

  const refreshContent = useCallback(() => {
    apiGetData('/api/v1/complaints', { ...data.search }, false, {})
  }, [apiGetData, data.search])

  return (
    <>
      <section>
        <FormSearchComplaintListing
          initialValues={data.search}
          apiGetData={apiGetData}
          query={router.query}
        />
      </section>
      <section className='mt-5'>
        <TableComplaintListing
          data={data.data}
          loading={loading}
          // PAGE API
          page={data.search.page}
          perPage={data.search.page_size}
          total={data.meta.total}
          onChange={onChangePage}
          // REFRESH
          refreshContent={refreshContent}
        />
      </section>
    </>
  )
}

export default React.memo(OverviewScreen)
