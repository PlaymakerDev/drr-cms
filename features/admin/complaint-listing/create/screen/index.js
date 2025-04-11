import React from 'react'
import { MainContent } from '../components/content'

const CreateScreen = (props) => {
  const { id, type, office, sub_office } = props

  return (
    <MainContent
      id={id}
      type={type}
      office={office}
      sub_office={sub_office}
    />
  )
}

export default React.memo(CreateScreen)
