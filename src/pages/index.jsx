import React, { lazy, Suspense }  from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import LoadFail from '@/components/load/loadFail'
import Loading from '@/components/load/Loading'

const home = lazy(() => import('./home'));
const search = lazy(() => import('./search'));
const order = lazy(() => import('./order'));
const user = lazy(() => import('./user'));

export default () => (
  <LoadFail>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={home} />
        <Route exact path="/search" component={search} />
        <Route exact path="/order" component={order} />
        <Route exact path="/user" component={user} />
        <Route exact path="*" render={() => <Redirect to="/home" />} />
      </Switch>
    </Suspense>
  </LoadFail>
)