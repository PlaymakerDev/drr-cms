import React from 'react'
import { Card } from 'antd'
import { FormSearchUser } from '../form'
import { TableUser } from '../table'

const UserListSection = (props) => {
  const { } = props

  return (
    
      <section className=''>
        <TableUser />
      </section>
    
  )
}

export default React.memo(UserListSection)
