import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import { isAuthenticaded } from './services/auth';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Main from './pages/Main';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (isAuthenticaded() ? (
      <Component {...props} />
    ) : (
      <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    ))}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      )}/>
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/app" component={Main} />
      <Route path="*" component={() => <h1>404 - Page Not Found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
