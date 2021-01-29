import React from 'react'
import DefaultLayout from './layouts/default'

const index = ({ msg }) => {

  return (<DefaultLayout title="Home">

    <div className="alert alert-primary" role="alert">
      ya!gba api

      <h1>{msg}</h1>

    </div>
  </DefaultLayout>
  )
}

export default index