import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import DashboardNavbar from "./DashboardNavbar";
import "./AfterLogin.css";
import NavLinks from "./NavLinks";

function AfterLogin() {
  const [menuClick, setMenuClick] = useState(
    window.innerWidth > 700 ? true : false
  );

  const handleMenuClick = () => setMenuClick(!menuClick);

  const handleMenu = () => {
    if (window.innerWidth > 700) {
      setMenuClick(true);
    } else {
      setMenuClick(false);
    }
  };

  const closeMenu = () => {
    window.innerWidth > 700 ? setMenuClick(menuClick) : setMenuClick(false);
  };
  const navLinks = [
    {
      navlink_icon: "fa-solid fa-house-user",
      name: "Dashboard",
      link: "/dashboard",
    },
    { navlink_icon: "fa-solid fa-user", name: "Profile", link: "/profile" },
    {
      navlink_icon: "fa-solid fa-user-plus ",
      name: "Add Patients",
      link: "/add-patient",
    },
    {
      navlink_icon: "fa-solid fa-eye ",
      name: "See Patients",
      link: "/see-patient",
    },
  ];

  window.addEventListener("resize", handleMenu);

  return (
    <>
      <div className="dashboard">
        <div className="top_nav">
          <div className="menu-logo">
            <i
              onClick={handleMenuClick}
              className={menuClick ? "fas fa-times" : "fas fa-bars"}
            />
            <h1>HMS</h1>
          </div>
          <div className="top-nav-right">hw</div>
        </div>

        <div className="content">
          <button>hello</button>
        </div>

        <div className={menuClick ? "dashboard_nav" : "dashboard_nav_closed"}>
          <h1>HMS</h1>
          <br />
          <br />
          <div>
            <ul className={menuClick ? "nav-items-active" : "nav-items"}>
              {navLinks.map((navs) => (
                <NavLinks navs={navs} closeMenu={closeMenu} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default AfterLogin;
