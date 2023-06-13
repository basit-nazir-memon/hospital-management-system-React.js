import React from "react";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

function LoginPage(props) {
  return (
    <div>
      <Navbar />
      <Login setToken={props.setToken} />
      <Footer />
    </div>
  );
}

export default LoginPage;
