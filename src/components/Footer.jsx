import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer class="footerContainer">
      <div class="footer-content">
        <h3>Hospital Management System</h3>
        <p>Serving Happiness to People</p>
        <ul class="socials">
          <li>
            <a href="/">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-google-plus"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="/">
              <i class="fa fa-linkedin-square"></i>
            </a>
          </li>
        </ul>
      </div>
      <div class="footer-bottom">
        <p>
          copyright &copy; {new Date().getFullYear()} <Link to="/">HMS</Link>{" "}
        </p>
        <div class="footer-menu">
          <ul class="f-menu">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/services"}>Services</Link>
            </li>
            <li>
              <Link to={"/contact-us"}>Contact Us</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
