import React from 'react'
import { FormSearchComplaintStatistic, TotalComplaint } from '../components'
import Bottom from '../components/section/Bottom'

const ComplaintStatisticScreen = (props) => {
  const {} = props

  return (
    <>
      <section>
        <FormSearchComplaintStatistic />
      </section>
      <section className='mt-4'>
        <TotalComplaint />
      </section>
      <section className='mt-4'>
        <Bottom />
      </section>
    </>
  )
}

export default React.memo(ComplaintStatisticScreen)
