import React, { useEffect, useMemo } from 'react'
import { FormContent } from '../content'
import useGetAPI from '@/utils/hooks/api/useGetAPI'
import { complaints_get_detail } from '@/store/features/complaintListingSlice'
import { Spin } from 'antd'

const MainContent = (props) => {
  const { id, type, office, sub_office} = props
  const [apiGetData, loading, data] = useGetAPI('overlay', {
    funcDispatch: complaints_get_detail, reducerName: 'complaintListing', reducerKey: 'complaints_get_detail'
  })

  useEffect(() => {
    if (id) {
      apiGetData(`/api/v1/complaints/get_complaint/${id}`, {dept_type:type,notified_office :office,sub_notified_office :sub_office}, false, {})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])
  console.log('data id = ',id);
  console.log('data type = ' ,type);
  console.log('data office = ',office);
  console.log('data sub_office = ',sub_office);

  const renderContent = useMemo(() => {
    if (id) {
      if (!loading && typeof loading !== 'undefined') {
        return (
          <FormContent
            id={id}
            data={data.data}
          />
        )
      } else {
        return (
          <div className='flex justify-center items-center h-full'>
            <Spin spinning={loading} />
          </div>
        )
      }
    } else {
      return <FormContent />
    }
  }, [data, loading, id])

  return (
    <div>
      {renderContent}
    </div>
  )
}

export default React.memo(MainContent)
