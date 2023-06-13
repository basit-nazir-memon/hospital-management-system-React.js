import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(true);
  const handleMenuClick = () => setClick(!click);
  const closeMenu = () => setClick(true);

  return (
    <nav>
      <Link to="/" className="logo" onClick={closeMenu}>
        HMS
      </Link>
      <ul className={click ? "nav-ul" : "nav-ul-open"}>
        <li>
          <NavLink exact className="link" to="/" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/services" onClick={closeMenu}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/contact-us" onClick={closeMenu}>
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink className="link" to="/login" onClick={closeMenu}>
            Login
          </NavLink>
        </li>
      </ul>
      <label id="icon" onClick={handleMenuClick}>
        <i className={click ? "fas fa-bars" : "fas fa-times"} />
      </label>
    </nav>
  );
}

export default Navbar;
