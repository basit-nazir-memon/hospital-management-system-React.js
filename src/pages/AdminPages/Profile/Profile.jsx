import React from "react";
import "./Profile.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import ProfileCard from "../../../components/ProfileCard";

const Profile = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log("UseEffect");
    Axios.post("http://localhost:3001/profile", {
      id: sessionStorage.getItem("UserID"),
    }).then((response) => {
      setData(response.data.result[0]);
    });
  }, []);

  return (
    <div className="Profile">
      <div className="title">Profile</div>
      <div className="ProfileCardWrappper">
        <ProfileCard data={data} />
      </div>
    </div>
  );
};

export default Profile;
