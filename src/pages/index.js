import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import home from './home'

export default () => (
  <React.Fragment>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home" />} />
      <Route path="/home" component={home} />
    </Switch>
  </React.Fragment>
)