import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import PrivateRoute from "./helpers/PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Home}
      >
        <Redirect to="/home" />
      </Route>
      <Route path="/login" component={Login} />
      <PrivateRoute exact path="/home" component={Home} />
    </Switch>
  );
};

export default withRouter(Routes);
