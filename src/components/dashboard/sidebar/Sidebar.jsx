import { Link } from "react-router-dom";
import { Logout } from "@mui/icons-material";
import "./Sidebar.css";

const Sidebar = ({ data }) => {
  const LogOut = (e) => {
    sessionStorage.removeItem("UserID");
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <span className="sidebar-logo">HMS Admin</span>
      </div>
      <hr className="sidebar-line" />
      <div className="sidebar-center">
        <ul className="sidebar-items">
          {data.map((item) => (
            <li>
              <Link to={item.link} className="sidebar-item">
                {item.icon}
                <span className="sidebar-item-title">{item.title}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link to={"/"} className="sidebar-item" onClick={(e) => LogOut(e)}>
              <Logout />
              <span className="sidebar-item-title">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar-bottom">
        <div className="color-options"></div>
        <div className="color-options"></div>
      </div>
    </div>
  );
};

export default Sidebar;
