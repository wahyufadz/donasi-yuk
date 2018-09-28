import React from 'react'
import { Route } from 'react-router-dom'

import Link from './Link'
export default () => {
  return (
    <div>
      <Route path="/Link" component={Link}/>
    </div>
  )
}
