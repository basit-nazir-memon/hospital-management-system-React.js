import React from "react";
import { useState } from "react";
import "../Add Patient/AddPatient.css";
import Axios from "axios";
import { SettingsSystemDaydreamOutlined } from "@mui/icons-material";

const Appointment = () => {
  const [patientEmail, setPatientEmail] = useState(null);
  const [doctorID, setDoctorID] = useState(null);
  const [symptoms, setSymptoms] = useState(null);
  const [appDnT, setAppDnT] = useState(null);
  const [admit, setAdmit] = useState(false);
  const BookAppointment = (e) => {
    if (
      patientEmail === null ||
      doctorID === null ||
      symptoms === null ||
      appDnT === null
    ) {
      console.log("Fill All Fields");
    } else {
      console.log(
        "Patient Email: " +
          patientEmail +
          ", DoctorId: " +
          doctorID +
          ", Symptoms: " +
          symptoms +
          ", AppointmentDnT: " +
          appDnT
      );
      // Axios.post("http://localhost:3001/patient-appointment", {
      //   patientEmail: patientEmail,
      //   doctorID: doctorID,
      //   symptoms: symptoms,
      //   appDnT: appDnT,
      //   admit: admit,
      //   appBy: sessionStorage.getItem("UserId"),
      //   admitDnT: new Date(),
      // }).then((response) => {
      //   if (response.data.err) {
      //     console.log(response.data.err);
      //   } else {
      //     console.log("Patient Added");
      //     e.preventDefault();
      //     document.getElementById("addPatientFormReset").reset();
      //     }
      //   });
      // }
    }
  };
  return (
    <>
      <div className="addpatient">
        <div className="title">Patient Appointment</div>
        <div className="addPatientForm">
          <form action="/admin/addPatient" id="addPatientFormReset">
            <div className="name">
              <div className="formItem">
                <label htmlFor="patientEmail">Patient Email</label>
                <input
                  type="text"
                  name="patientEmail"
                  id="patientEmail"
                  placeholder="Enter Patient Email"
                  onChange={(e) => setPatientEmail(e.target.value)}
                />
              </div>
              <div className="formItem">
                <label htmlFor="DoctorID">Doctor ID</label>
                <input
                  type="text"
                  name=""
                  id="DoctorID"
                  placeholder="Enter Doctor ID"
                  onChange={(e) => setDoctorID(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="symptoms">Symptoms</label>
                <input
                  type="text"
                  name=""
                  id="symptoms"
                  placeholder="e.g. Fever, Cough, Flu, Stress etc."
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div className="formItem">
                <label htmlFor="appDnT">Select Appointment Date & Time</label>
                <input
                  type="datetime-local"
                  id="appDnT"
                  onChange={(e) => setAppDnT(e.target.value)}
                />
              </div>
            </div>
            <div className="name">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input
                  type="checkbox"
                  name="admit"
                  id="admit"
                  style={{ margin: "10px" }}
                  onChange={(e) => {
                    setAdmit(e.target.checked);
                  }}
                />
                <p style={{ fontSize: "15px", color: "grey" }}>
                  Do the Patient Want to Admit?
                </p>
              </div>
            </div>
            <div className="buttonDiv">
              <button
                type="submit"
                className="saveBtn"
                onClick={(e) => BookAppointment(e)}
              >
                {"Book Appointment"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointment;
