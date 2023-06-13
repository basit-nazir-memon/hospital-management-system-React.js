import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useHistory,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AdminPanel from "../pages/Panels/AdminPanel/AdminPanel";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
import { PrivateRoute, ProvideAuth } from "./Authentication";
import PatientPanel from "../pages/Panels/PatientPanel/PatientPanel";

function App() {
  console.log(window.location.href);

  const [token, setToken] = useState("undef");
  const history = useHistory();

  const notLoggedIn = () => {
    const location = {
      pathname: "/login",
      state: { fromDashboard: true },
    };
    console.log("Hello");
    history.replace(location);
  };

  return (
    <>
      <ProvideAuth>
        <Router>
          <Switch>
            <Route exact path={"/"} component={withRouter(HomePage)} />
            <Route
              path={"/login"}
              component={(props) => (
                <LoginPage {...props} setToken={setToken} />
              )}
            />
            <Route path={"/sign-up"} component={withRouter(SignUpPage)} />
            <PrivateRoute path={"/admin"}>
              <AdminPanel />
            </PrivateRoute>
            <PrivateRoute path={"/portals"}>
              <PatientPanel />
            </PrivateRoute>
            <Route path={"/services"} component={withRouter(Services)} />
            <Route path={"/contact-us"} component={withRouter(ContactUs)} />
          </Switch>
        </Router>
      </ProvideAuth>
    </>
  );
}

export default App;
