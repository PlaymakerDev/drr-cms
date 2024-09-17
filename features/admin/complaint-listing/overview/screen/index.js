import React from 'react'
import { FormSearchComplaintListing, TableComplaintListing } from '../components'

const OverviewScreen = (props) => {
  const { } = props

  return (
    <>
      <section>
        <FormSearchComplaintListing />
      </section>
      <section className='mt-5'>
        <TableComplaintListing />
      </section>
    </>
  )
}

export default React.memo(OverviewScreen)
