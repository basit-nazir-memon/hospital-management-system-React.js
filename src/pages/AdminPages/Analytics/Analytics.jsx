import React from "react";
import AreaBarLineChart from "../../../components/dashboard/Chart/AreaBarLineChart/AreaBarLine";
import CRadarChart from "../../../components/dashboard/Chart/RadarChart/RadarChart";
import Featured from "../../../components/dashboard/featured/Featured";
import Widget from "../../../components/dashboard/widget/Widget";
import CLineChart from "../../../components/dashboard/Chart/LineChart/LineChart";
import CBarChart from "../../../components/dashboard/Chart/BarChart/BarChart";
import "./Analytics.css";
import { PersonOutlined } from "@mui/icons-material";

const widgetData = [
  {
    title: "Patients",
    Figure: 315,
    percentage: -20,
    seeAllTitle: "See all patients",
    seeAllLink: "/",
    buttonIcon: PersonOutlined,
    buttonLink: "/",
    theme: {
      back: "purple",
      color: "white",
    },
  },
  {
    title: "Doctors",
    Figure: 57,
    percentage: 17,
    seeAllTitle: "See all doctors",
    seeAllLink: "/",
    buttonIcon: PersonOutlined,
    buttonLink: "/",
    theme: {
      back: "royalblue",
      color: "white",
    },
  },
];
const Analytics = () => {
  return (
    <div className="analytics">
      <div className="title">Analytics</div>
      <div className="analyticsTop">
        <div className="analyticsTopLeft">
          <AreaBarLineChart />
        </div>
        <div className="analyticsTopRight">
          <Featured />
        </div>
      </div>
      <div className="analyticsCenter">
        <div className="analyticsCenterLeft">
          <Widget data={widgetData[0]} />
          <Widget data={widgetData[1]} />
        </div>
        <div className="analyticsCenterRight">
          <CLineChart />
        </div>
      </div>
      <div className="analyticsBottom">
        <div className="analyticsBottomLeft">
          <CBarChart />
        </div>
        <div className="analyticsBottomRight">
          <CRadarChart />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
