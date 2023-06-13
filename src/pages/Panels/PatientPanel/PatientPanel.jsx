import React from "react";
import {
  DashboardOutlined,
  AnalyticsOutlined,
  NotificationsNone,
  SettingsOutlined,
  AccountCircleOutlined,
  BookOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import Navbar from "../../../components/dashboard/navbar/Navbar";
import Notifications from "../../AdminPages/Notifications/Notifications";
import Messages from "../../AdminPages/Messages/Messages";
import { Route, Switch, withRouter } from "react-router-dom";
import Profile from "../../AdminPages/Profile/Profile";
import PatientDashboard from "../../Dashboards/PatientDashboard/PatientDashboard";
import Appointment from "../../AdminPages/Appointment/Appointment";
const PatientPanel = () => {
  const sideBarItems = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined className="sidebar-icon" />,
      link: "/portals/dashboard",
    },
    {
      title: "Patient Appointment",
      icon: <BookOutlined className="sidebar-icon" />,
      link: "/portals/appointment",
    },
    {
      title: "Stats",
      icon: <AnalyticsOutlined className="sidebar-icon" />,
      link: "/portals/analytics",
    },
    {
      title: "Notifications",
      icon: <NotificationsNone className="sidebar-icon" />,
      link: "/portals/notifications",
    },
    {
      title: "Messages",
      icon: <ChatBubbleOutlineOutlined className="sidebar-icon" />,
      link: "/portals/messages",
    },
    {
      title: "Settings",
      icon: <SettingsOutlined className="sidebar-icon" />,
      link: "/portals/settings",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlined className="sidebar-icon" />,
      link: "/portals/profile",
    },
  ];
  return (
    <div className="dashboard">
      <Sidebar data={sideBarItems} />
      <div className="dashboardContainer">
        <Navbar />
        <Switch>
          <Route
            path={"/portals/dashboard"}
            component={withRouter(PatientDashboard)}
          />
          <Route path={"/portals/analytics"} component={withRouter(Profile)} />
          <Route
            path={"/portals/notifications"}
            component={withRouter(Notifications)}
          />
          <Route path={"/portals/messages"} component={withRouter(Messages)} />
          <Route path={"/portals/settings"} component={withRouter(Profile)} />
          <Route path={"/portals/profile"} component={withRouter(Profile)} />
          <Route
            path={"/portals/appointment"}
            component={withRouter(Appointment)}
          />
        </Switch>
      </div>
    </div>
  );
};

export default PatientPanel;
