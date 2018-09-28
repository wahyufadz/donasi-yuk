import React from 'react'
import { Route } from 'react-router-dom'

import Home from '../Contents/Home/Home'
import SignUp from '../Contents/SignUp/SignUp'

export default () => {
  return (
    <div className="ContentRouter">
      <Route exact path="/home" component={Home}/>
      <Route path="/signup" component={SignUp}/>
    </div>
  )
}
