import React from "react";
import WelcomeCard from "../../../components/WelcomeCard";
import "./PatientDashboard.css";
import LineChart from "../../../components/dashboard/Chart/LineChart/LineChart";
import Featured from "../../../components/dashboard/featured/Featured";
import CRadarChart from "../../../components/dashboard/Chart/RadarChart/RadarChart";
import CPieChart from "../../../components/dashboard/Chart/PieChart/PieChart";
import CBarChart from "../../../components/dashboard/Chart/BarChart/BarChart";
import Table from "../../../components/table/Table";
import NewsItem from "../../../components/NewsItem";
import doctorsListItem from "../../../components/doctorsListItem";
const PatientDashboard = () => {
  return (
    <div className="PatientDashboard">
      <div className="title">Dashboard</div>
      <div className="FirstContainer">
        <div className="WelcomeContainer">
          <WelcomeCard />
        </div>
        <div className="FiguresContainer">
          <div className="FiguresCardWrapper">
            <div className="figures">
              <div className="figuresNum" style={{ color: "Green" }}>
                52
              </div>
              <div className="figuresDesc">Doctors Available</div>
            </div>
            <div className="figures">
              <div className="figuresNum" style={{ color: "royalblue" }}>
                21
              </div>
              <div className="figuresDesc">Notifications</div>
            </div>
            <div className="figures">
              <div className="figuresNum" style={{ color: "Tomato" }}>
                11
              </div>
              <div className="figuresDesc">Messages</div>
            </div>
          </div>
        </div>
      </div>
      <div className="SecondContainer">
        <div className="LineChartContainer">
          <div className="ChartTitle">Your Appointments</div>
          <div className="Chart">
            <LineChart />
          </div>
        </div>
        <div className="ListContainer">
          <div className="ChartTitle">Disease Graph</div>
          <div className="Chart">
            <CRadarChart />
          </div>
        </div>
      </div>
      <div className="FourthContainer">
        <div className="FourthContainerLeft">
          Doctors List
          <doctorsListItem />
        </div>
        <div className="FourthContainerRight">
          <CBarChart />
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
