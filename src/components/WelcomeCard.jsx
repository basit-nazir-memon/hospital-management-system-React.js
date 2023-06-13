import React from "react";
import User from "../images/User.png";
import "./WelcomeCard.css";
const WelcomeCard = () => {
  return (
    <div className="WelcomeCard">
      <div className="WelcomeCardLeft">
        <div className="WelcomeTitle">Welcome User!</div>
        <div className="WelcomeContent">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          iusto dolores ut eum facere pariatur dolore! Dolore quae at minima!
        </div>
      </div>
      <div className="WelcomeCardRight">
        <img src={User} alt="NO Image" className="WelcomeImage" />
      </div>
    </div>
  );
};

export default WelcomeCard;
