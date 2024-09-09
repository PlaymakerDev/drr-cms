import React from 'react'
import { TopSection, BottomSection } from '../components/section'

const DashboardScreen = (props) => {
  const { } = props

  return (
    <div>
      <section>
        <TopSection />
      </section>
      <section className='mt-5'>
        <BottomSection />
      </section>
    </div>
  )
}

export default React.memo(DashboardScreen)
