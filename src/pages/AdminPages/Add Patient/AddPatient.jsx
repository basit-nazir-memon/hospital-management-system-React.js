import React from "react";
import { useState } from "react";
import "./AddPatient.css";
import Axios from "axios";
import { Link, Redirect } from "react-router-dom";

const AddPatient = () => {
  const [name, setName] = useState(null);
  const [fhwName, setfhwName] = useState(null);
  const [address, setAddress] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [dob, setDOB] = useState(null);
  const [gender, setGender] = useState(null);
  const [bloodGroup, setBloodGroup] = useState(null);
  const [cnic, setCnic] = useState(null);

  const RegisterPatient = (e) => {
    if (
      name === null ||
      fhwName === null ||
      address === null ||
      email === null ||
      phone === null ||
      dob === null ||
      gender === null ||
      bloodGroup === null ||
      cnic === null
    ) {
      console.log("Fill All Fields");
    } else {
      Axios.post("http://localhost:3001/addpatient", {
        name: name,
        fhwName: fhwName,
        address: address,
        email: email,
        phone: phone,
        dob: dob,
        gender: gender,
        bloodGroup: bloodGroup,
        cnic: cnic,
      }).then((response) => {
        if (response.data.err) {
          console.log(response.data.err);
        } else {
          console.log("Patient Added");
          e.preventDefault();
          document.getElementById("addPatientFormReset").reset();
        }
      });
    }
    // console.log(
    //   "Name: " +
    //     name +
    //     ", FHWName: " +
    //     fhwName +
    //     ", Address: " +
    //     address +
    //     ", Email: " +
    //     email +
    //     ", Phone: " +
    //     phone +
    //     ", DOB: " +
    //     dob +
    //     ", Gender: " +
    //     gender +
    //     ", BGroup: " +
    //     bloodGroup +
    //     ", Admission: " +
    //     admissionDnT +
    //     ", Reg: " +
    //     regNo +
    //     ", Symptoms: " +
    //     symptoms
    // );
  };
  return (
    <>
      <div className="addpatient">
        <div className="title">Add New Patient</div>
        <div className="addPatientForm">
          <form action="/admin/addPatient" id="addPatientFormReset">
            <div className="name">
              <div className="formItem">
                <label htmlFor="firstName">Full Name</label>
                <input
                  type="text"
                  name=""
                  id="firstName"
                  placeholder="Enter full name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label htmlFor="fhwName">Father/Husband/Wife Name</label>
                <input
                  type="text"
                  name=""
                  id="fhwName"
                  placeholder="Enter full name"
                  onChange={(e) => setfhwName(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name=""
                  id="address"
                  placeholder="e.g. Sunnyvale, CA, US"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Enter Personal Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  name=""
                  id="Phone"
                  placeholder="Enter phone number"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  type="date"
                  name=""
                  id="dob"
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label htmlFor="gender">Gender</label>
                <div className="radios">
                  <input
                    type="radio"
                    name="a"
                    id="gender"
                    onChange={(e) =>
                      e.target.value ? setGender("Male") : setGender(null)
                    }
                  />
                  Male
                  <input
                    type="radio"
                    name="a"
                    id="gender"
                    onChange={(e) =>
                      e.target.value ? setGender("Female") : setGender(null)
                    }
                  />
                  Female
                  <input
                    type="radio"
                    name="a"
                    id="gender"
                    onChange={(e) =>
                      e.target.value ? setGender("Other") : setGender(null)
                    }
                  />
                  Other
                </div>
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="bloodGroup">Blood Group</label>
                <select
                  name="bloodGroup"
                  id="bloodGroup"
                  onChange={(e) => setBloodGroup(e.target.value)}
                >
                  <option value="nill">Not known</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="formItem">
                <label htmlFor="cnic">CNIC</label>
                <input
                  type="text"
                  name="cnic"
                  id="cnic"
                  placeholder="Enter CNIC Number "
                  onChange={(e) => setCnic(e.target.value)}
                />
              </div>
            </div>
            <div className="buttonDiv">
              <button
                type="submit"
                className="saveBtn"
                onClick={(e) => RegisterPatient(e)}
              >
                {"Add Patient"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddPatient;
