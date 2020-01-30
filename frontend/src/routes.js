import React from 'react'

import SignUp from './pages/SignUp'

import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"

import {isAuthenticaded} from './services/auth'

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
  {...rest}
  render={props =>
  isAuthenticaded() ? (
    <Component {...props} />
  ) : (
    <Redirect to={{pathname: '/', state: {from: props.location}}} />
  )

}
/>
)

const Routes = () => (
  <BrowserRouter>
    <Switch>
        <Route exact path='/' component={() => <h1>Login</h1>} />
        <Route exact path="/signup" component={() => <SignUp/>} />
        <PrivateRoute path="/app" component={() => <h1>APP</h1>} />
        <Route path='*' component={() => <h1>404 - Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
)

export default Routes;