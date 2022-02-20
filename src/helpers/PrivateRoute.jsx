import React from "react";
import {
  Route, Redirect
} from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let authorized = false;
  let redirectToPath;
  if (window.sessionStorage.getItem("uid")) {
    authorized = true
  } else {
    redirectToPath = "/login"
  }
  return (
    <Route
      {...rest}
      render={props => (
        authorized
          ? <Component {...props} />
          : <Redirect
            to={{
              // pathname: "/account",
              pathname: redirectToPath,
            }}
          />
      )}
    />
  )
}

export default PrivateRoute;