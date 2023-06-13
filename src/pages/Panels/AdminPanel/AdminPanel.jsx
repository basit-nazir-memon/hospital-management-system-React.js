import React from "react";
import "./AdminPanel.css";
import Navbar from "../../../components/dashboard/navbar/Navbar";
import Sidebar from "../../../components/dashboard/sidebar/Sidebar";
import AdminDashboard from "../../Dashboards/AdminDashboard/AdminDashboard";
import Appointment from "../../AdminPages/Appointment/Appointment";
import {
  DashboardOutlined,
  PersonOutlined,
  PersonAddAlt,
  AnalyticsOutlined,
  NotificationsNone,
  SettingsOutlined,
  AccountCircleOutlined,
  BookOutlined,
  ChatBubbleOutlineOutlined,
} from "@mui/icons-material";
import { Route, Switch, withRouter } from "react-router-dom";
import AddPatient from "../../AdminPages/Add Patient/AddPatient";
import patientsList from "../../AdminPages/Patients List/patientsList";
import analytics from "../../AdminPages/Analytics/Analytics";
import Notifications from "../../AdminPages/Notifications/Notifications";
import SystemHealth from "../../AdminPages/System Health/SystemHealth";
import settings from "../../AdminPages/Settings/Settings";
import Profile from "../../AdminPages/Profile/Profile";
import Messages from "../../AdminPages/Messages/Messages";

const AdminPanel = () => {
  const sideBarItems = [
    {
      title: "Dashboard",
      icon: <DashboardOutlined className="sidebar-icon" />,
      link: "/admin/dashboard",
    },
    {
      title: "Users",
      icon: <PersonOutlined className="sidebar-icon" />,
      link: "/admin/users",
    },
    {
      title: "Add User",
      icon: <PersonAddAlt className="sidebar-icon" />,
      link: "/admin/addpatient",
    },
    {
      title: "Patient Appointment",
      icon: <BookOutlined className="sidebar-icon" />,
      link: "/admin/appointment",
    },
    {
      title: "Stats",
      icon: <AnalyticsOutlined className="sidebar-icon" />,
      link: "/admin/analytics",
    },
    {
      title: "Notifications",
      icon: <NotificationsNone className="sidebar-icon" />,
      link: "/admin/notifications",
    },
    {
      title: "Messages",
      icon: <ChatBubbleOutlineOutlined className="sidebar-icon" />,
      link: "/admin/messages",
    },
    {
      title: "Settings",
      icon: <SettingsOutlined className="sidebar-icon" />,
      link: "/admin/settings",
    },
    {
      title: "Profile",
      icon: <AccountCircleOutlined className="sidebar-icon" />,
      link: "/admin/profile",
    },
  ];

  return (
    <div className="dashboard">
      <Sidebar data={sideBarItems} />
      <div className="dashboardContainer">
        <Navbar />
        <Switch>
          <Route
            path={"/admin/dashboard"}
            component={withRouter(AdminDashboard)}
          />
          <Route
            path={"/admin/addpatient"}
            component={withRouter(AddPatient)}
          />
          <Route path={"/admin/users"} component={withRouter(patientsList)} />
          <Route path={"/admin/analytics"} component={withRouter(analytics)} />
          <Route
            path={"/admin/notifications"}
            component={withRouter(Notifications)}
          />
          <Route path={"/admin/messages"} component={withRouter(Messages)} />
          <Route path={"/admin/health"} component={withRouter(SystemHealth)} />
          <Route path={"/admin/settings"} component={withRouter(settings)} />
          <Route path={"/admin/profile"} component={withRouter(Profile)} />
          <Route
            path={"/admin/appointment"}
            component={withRouter(Appointment)}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AdminPanel;
