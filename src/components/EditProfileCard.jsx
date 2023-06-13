import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./EditProfileCard.css";

const EditProfileCard = ({ data }) => {
  const [name, setName] = useState(null);
  const [cnic, setCNIC] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dob, setDOB] = useState(null);
  const [bloodGroup] = useState(null);
  const [address, setAddress] = useState(null);
  const [age, setAge] = useState(null);
  const [pic, setPic] = useState(null);

  useEffect(() => {
    setName(data.fullName);
    setEmail(data.email);
    setCNIC(data.cnic);
    setPhone(data.phone);
    setPic(data.profilePic);
    setAddress(data.address);
    setAge(data.age);
    setDOB(data.dob);
  }, []);

  console.log(email);
  return (
    <div className="ProfileCard">
      <div className="profileCardSmall">
        <div className="profilePicWrapper">
          <img src={pic} alt="profile" className="ProfilePic" />
          <p className="ProfileName">{name}</p>
          <p className="ProfileEmail">{email}</p>
        </div>
      </div>
      <div className="profileCardLarge">
        <div className="PersonalInfo">
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Name:</div>
              <input
                type="text"
                name=""
                className="PeronalInfoItemDesc"
                value={name}
                onChange={(e) => setName(e.value.target)}
              />
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">CNIC:</div>
              <input
                type="text"
                value={cnic}
                onChange={(e) => setCNIC(e.value.target)}
              />
            </div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Email:</div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.value.target)}
              />
            </div>
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Phone:</div>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.value.target)}
              />
            </div>
          </div>
          <div className="PersonalInfoItemWrapper">
            <div className="PersonalInfoItem">
              <div className="PersonalInfoItemTitle">Date of Birth:</div>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDOB(e.value.target)}
              />
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

export default EditProfileCard;
