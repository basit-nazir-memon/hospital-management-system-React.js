import AdminDashboard from "../../pages/Dashboards/AdminDashboard/AdminDashboard";
import "./Dashboard.css";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Login from "../Login";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboardContainer">
        <Navbar />
        <Login />
      </div>
    </div>
  );
};

export default Dashboard;
