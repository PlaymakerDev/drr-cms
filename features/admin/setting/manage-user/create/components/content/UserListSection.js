import React from 'react'
import { FormSearchUser } from '../form'
import { TableUser } from '../table'

const UserListSection = (props) => {
  const { data, loading, page, perPage, total, onChange, refreshContent, setPrefill } = props

  return (
    <>
      {/* <section>
        <FormSearchUser />
      </section>
      <section className='mt-5'>
      </section> */}
      <TableUser
        //  setOpen={setOpen}
        data={data}
        loading={loading}
        //PAGE API
        page={data?.search?.page || 1}
        perPage={data?.search?.page_size || 10}
        total={data?.meta?.total || 0}
        onChange={onChange}
        // REFRESH
        refreshContent={refreshContent}
        setPrefill={setPrefill}
      />
    </>
  )
}

export default React.memo(UserListSection)
