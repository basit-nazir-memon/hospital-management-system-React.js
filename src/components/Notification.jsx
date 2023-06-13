import React from "react";
import { Circle } from "@mui/icons-material";
import "./Notification.css";
const Notification = ({ data }) => {
  return (
    <div className="notification">
      <div className="notificationTop">
        <div className="notificationTopLeft">
          <img src={data.pic} alt="" className="profileImage" />
        </div>
        <div className="notificationTopCenter">{data.name}</div>
        <div className="notificationTopRight">
          <Circle style={{ fill: "blue", fontSize: "15px" }} />
        </div>
      </div>
      <div className="notificationCenter">
        <div className="notificationTitle">{data.title}</div>
        <div className="notificationContent">{data.description}</div>
      </div>
      <div className="notificationBottom">
        <div className="notificationPostDnT">
          {data.date.toLocaleDateString() +
            " - " +
            data.date.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default Notification;
