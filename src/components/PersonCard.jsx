import React from "react";
import {
  InfoOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
import "./PersonCard.css";
import Profile from "../pages/AdminPages/Profile/Profile";

const PersonCard = ({ user, handleShowDetails, handleShowEdit }) => {
  return (
    <>
      <li className="patientsListItem">
        <div className="patientsListItemCard">
          <div className="patientsListItemCardProfileWrapper">
            <img
              src={user.profilePic}
              alt="Pic"
              className="patientsListItemCardicProfilePicWrapper"
            />
          </div>
          <div className="patientsListItemCardProfileDetails">
            <div className="patientsListItemCardProfileInfo">
              <div className="patientsListItemCardProfileInfoName">
                {user.fullName}
              </div>
              <div className="patientsListItemCardProfileInfoEmail">
                {user.email}
              </div>
            </div>
            <div className="patientsListItemCardProfileButtons">
              <button
                className="btn Details"
                onClick={() => handleShowDetails(user)}
              >
                <p className="nameTitle">Details</p>
                <div className="patientsListIcon">
                  <InfoOutlined
                    style={{ fill: "royalblue" }}
                    className="patientsListIcon"
                  />
                </div>
              </button>
              <button className="btn edit" onClick={() => handleShowEdit(user)}>
                <p className="nameTitle">Edit</p>
                <div className="patientsListIcon">
                  <EditOutlined style={{ fill: "green" }} />
                </div>
              </button>
              <button className="btn discharge">
                <p className="nameTitle">Discharge</p>
                <div className="patientsListIcon">
                  <LogoutOutlined style={{ fill: "tomato" }} />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="profileModal">
          <div className="profileModalContent"></div>
        </div>
      </li>
    </>
  );
};

export default PersonCard;
