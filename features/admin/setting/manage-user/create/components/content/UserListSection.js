import React from 'react'
import { FormSearchUser } from '../form'
import { TableUser } from '../table'

const UserListSection = (props) => {
  const { } = props

  return (
    <>
      <section>
        <FormSearchUser />
      </section>
      <section className='mt-5'>
        <TableUser />
      </section>
    </>
  )
}

export default React.memo(UserListSection)
