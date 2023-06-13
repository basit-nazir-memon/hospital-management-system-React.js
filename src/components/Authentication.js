import { createContext, useContext, useState } from "react";
import { Route, Redirect } from "react-router-dom";

let authentication = {
  isAuthenticated: false,
  signIn(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signOut(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

let authContext = createContext();

export function useAuth() {
  return useContext(authContext);
}

export function useProvideAuth() {
  const [user, setUser] = useState(null);
  const SignIn = (cb, UserID) => {
    authentication.signIn(() => {
      setUser(UserID);
      cb();
      sessionStorage.setItem("UserID", UserID);
    });
  };

  const SignOut = (cb) => {
    authentication.signOut(() => {
      setUser(null);
      cb();
    });
  };

  return { user, SignIn, SignOut };
}

export function ProvideAuth({ children }) {
  let auth = useProvideAuth();

  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        sessionStorage.getItem("UserID") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
