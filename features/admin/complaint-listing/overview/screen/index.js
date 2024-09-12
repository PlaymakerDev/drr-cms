import React from 'react'
import { FormSearchComplaintListing, TableComplaintListing } from '../components'
import { Typography } from 'antd'

const OverviewScreen = (props) => {
  const { } = props

  return (
    <div>
      <section>
        <FormSearchComplaintListing />
      </section>
      <section className='mt-5'>
        <TableComplaintListing />
      </section>
    </div>
  )
}

export default React.memo(OverviewScreen)
