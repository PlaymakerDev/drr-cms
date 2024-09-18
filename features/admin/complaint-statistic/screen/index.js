import React from 'react'
import { FormSearchComplaintStatistic } from '../components'
import { Top , Bottom } from '../components/section'

const ComplaintStatisticScreen = (props) => {
  const {} = props

  return (
    <>
      <section>
        <FormSearchComplaintStatistic />
      </section>
      <section className='mt-4'>
        <Top />
      </section>
      <section className='mt-4'>
        <Bottom />
      </section>
    </>
  )
}

export default React.memo(ComplaintStatisticScreen)
