import React from "react";
import {
  SearchOutlined,
  LanguageOutlined,
  DarkModeOutlined,
  FullscreenExitOutlined,
  NotificationsNoneOutlined,
  ChatBubbleOutlineOutlined,
  ListOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Profile from "../../../images/pic.jpg";

const Navbar = () => {
  let not = 99;
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" name="" id="" placeholder="Search..." />
          <SearchOutlined className="SearchIcon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <Link to={"/admin/notifications"}>
            <div className="item">
              <NotificationsNoneOutlined className="icon" />
              <div className="popUps">2</div>
            </div>
          </Link>
          <Link to={"/admin/messages"}>
            <div className="item">
              <ChatBubbleOutlineOutlined className="icon" />
              <div className="popUps">
                {not > 1000 ? "" : not > 99 ? "99+" : not}
              </div>
            </div>
          </Link>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <Link to={"/admin/profile"}>
            <div className="item">
              <img src={Profile} alt="O" className="avatar" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
