import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_Password] = useState("");
  const [date, setDate] = useState(new Date());

  const register = (e) => {
    if (name === "" || email === "" || password === "" || c_password === "") {
      console.log("Fill All Fields");
      e.preventDefault();
    } else if (password !== c_password) {
      console.log("Password not Match");
      e.preventDefault();
    } else if (date === new Date()) {
      console.log("Select Date");
      e.preventDefault();
    } else {
      Axios.post("http://localhost:3001/register", {
        name: name,
        email: email,
        password: password,
        date: date,
      }).then((response) => {
        if (response.data.message) {
          console.log("Wrong Data");
        } else {
          console.log("Registered Successfully");
        }
      });
    }
  };

  return (
    <div className="signup-card-center">
      <div className="sign-up-card">
        <form>
          <h3>Sign Up</h3>
          <div className="fields">
            <label htmlFor="Full Name">Full Name</label>
            <input
              type="text"
              name=""
              placeholder="Enter Full Name"
              className="form-item"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="">Email Address</label>
            <input
              type="email"
              className="form-item"
              name=""
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="">Password</label>
            <input
              type="password"
              className="form-item"
              name=""
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="">Confirm Password</label>
            <input
              type="password"
              className="form-item"
              name=""
              placeholder="Re-enter Password"
              onChange={(e) => setC_Password(e.target.value)}
            />
          </div>
          <div className="fields">
            <label htmlFor="">Date of Birth</label>
            <input
              type="date"
              className="form-item"
              name=""
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="fields">
            <button type="submit" className="submit-button" onClick={register}>
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
