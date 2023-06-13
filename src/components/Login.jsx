import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import Axios from "axios";
import { PropTypes } from "prop-types";
import "./Login.css";
import { useAuth } from "./Authentication";

function Login({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();
  let auth = useAuth();

  let { from } = { from: { pathname: "/admin/dashboard" } };

  const login = (e, location) => {
    if (email === "" || password === "") {
      console.log("Fill All Fields");
    } else {
      Axios.post("http://localhost:3001/login", {
        email: email,
        password: password,
      }).then((response) => {
        if (response.data.message) {
        } else if (response.data.err) {
          console.log(response.data.err);
        } else {
          if (response.data.result[0].role == "admin") {
            auth.SignIn(() => {
              history.replace(from);
            }, response.data.result[0].id);
          } else if (response.data.result[0].role == "patient") {
            from.pathname = "/portals/dashboard";
          }
          auth.SignIn(() => {
            history.replace(from);
          }, response.data.result[0].id);
        }
      });
    }
    e.preventDefault();
  };

  return (
    <div className="card-center">
      <div className="card">
        <form>
          <h3>Sign In</h3>
          <div className="fields">
            <label htmlFor="">Email Address</label>
            <br />
            <input
              type="email"
              className="form-item"
              name=""
              placeholder="Enter Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="fields">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-item"
              name=""
              placeholder="Enter Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <p className="fp">
            Forgot <a href="/">password?</a>
          </p>
          <div className="fields">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                name=""
                className="checkbox"
                id="customCheck1"
              />
              <label htmlFor="customCheck1" className="checkbox-label">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="submit-button"
              onClick={(e) => login(e)}
            >
              Login
            </button>
          </div>
          <div>
            <Link to={"/sign-up"}>
              <button className="signup-btn">Create Account</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
