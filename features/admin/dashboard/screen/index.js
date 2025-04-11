import React, { useEffect } from 'react'
import DashboardLayout from '../components/layout/dashboard'

const DashboardScreen = (props) => {
  const { } = props

  return (
    <>
      <section>
        <DashboardLayout />
      </section>
    </>
    // <div>
    //   <section>
    //     <TopSection />
    //   </section>
    //   <section className='mt-5'>
    //     <BottomSection />
    //   </section>
    // </div>
  )
}

export default React.memo(DashboardScreen)
