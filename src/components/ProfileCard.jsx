import React from "react";
import "./ProfileCard.css";
const ProfileCard = ({ data }) => {
  return (
    <div className="ProfileCard">
      <div className="profileCardSmall">
        <div className="profilePicWrapper">
          <img src={data.profilePic} alt="profile" className="ProfilePic" />
          <p className="ProfileName">{data.fullName}</p>
          <p className="ProfileEmail">{data.email}</p>
        </div>
      </div>
      <div className="profileCardLarge">
        <div className="PersonalInfo">
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Name:</div>
              <div className="PeronalInfoItemDesc">{data.fullName}</div>
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">CNIC:</div>
              <div className="PeronalInfoItemDesc">{data.cnic}</div>
            </div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Email:</div>
              <div className="PeronalInfoItemDesc">{data.email}</div>
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Phone:</div>
              <div className="PeronalInfoItemDesc">{data.phone}</div>
            </div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Date of Birth:</div>
              <div className="PeronalInfoItemDesc">{data.dob}</div>
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Gender:</div>
              <div className="PeronalInfoItemDesc">{data.gender}</div>
            </div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Blood Group:</div>
              <div className="PeronalInfoItemDesc">{data.bloodGroup}</div>
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">User ID</div>
              <div className="PeronalInfoItemDesc">{data.id}</div>
            </div>
          </div>
          <div className="PersonalInfoItem full">
            <div className="PersonalInfoItemTitle">Address:</div>
            <div className="PeronalInfoItemDesc">{data.address}</div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Authority:</div>
              <div className="PeronalInfoItemDesc">{data.role}</div>
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Age:</div>
              <div className="PeronalInfoItemDesc">{data.age}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
