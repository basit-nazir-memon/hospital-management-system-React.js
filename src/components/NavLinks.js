import React from "react";
import "./NavLinks.css";
// import { Link } from "react-router-dom";

function NavLinks(props) {
  return (
    <div className="Nav_Items" onClick={props.closeMenu}>
      <li className="Navlinks">
        <i
          className={props.navs.navlink_icon}
          style={{ color: "white", lineHeight: "35px" }}
        />
        <a href={props.navs.link} className="NavLinks_content">
          {props.navs.name}
        </a>
      </li>
    </div>
  );
}

export default NavLinks;
