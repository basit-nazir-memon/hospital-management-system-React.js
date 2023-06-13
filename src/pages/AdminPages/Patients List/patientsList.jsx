import { useState, useEffect } from "react";
import "./patientsList.css";
import Axios from "axios";
import PersonCard from "../../../components/PersonCard";
import ProfileCard from "../../../components/ProfileCard";
import EditProfileCard from "../../../components/EditProfileCard";

const PatientsList = () => {
  const [data, setData] = useState([]);
  const [details, setDetails] = useState({});
  const [showDetails, setShowDetails] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const clickOutside = (e) => {
    if (e.target === document.getElementById("ModalWrapper")) {
      setShowDetails(false);
      setShowEdit(false);
    }
  };

  window.addEventListener("click", (e) => clickOutside(e));

  const handleShowDetails = (User) => {
    setDetails(User);
    setShowDetails(true);
  };

  const handleShowEdit = (User) => {
    setDetails(User);
    setShowEdit(true);
  };

  useEffect(() => {
    Axios.post("http://localhost:3001/admin/users", {
      required: "Users List",
    }).then((response) => {
      if (response.data.err) {
        console.log("Error");
        console.log(response.data.err);
      } else {
        console.log("data Fetched");
        setData(response.data.result);
      }
    });
  }, []);

  return (
    <div className="patientsList">
      <div className="title">Admitted Patients List</div>
      <div className="patientsListWrapper">
        <ul className="patientsListItems">
          {data.map((user) => (
            <PersonCard
              key={user.id}
              user={user}
              handleShowDetails={handleShowDetails}
              handleShowEdit={handleShowEdit}
            />
          ))}
        </ul>
      </div>
      <div
        className={showDetails ? "detailsModalWrapper" : "hideModal"}
        id="ModalWrapper"
      >
        <div className="detailsModal">
          <p className="detailsCloseIcon" onClick={() => setShowDetails(false)}>
            &times;
          </p>
          <ProfileCard
            data={details}
            className={"detailsContent"}
            id="closeBtn"
          />
        </div>
      </div>
      <div
        className={showEdit ? "detailsModalWrapper" : "hideModal"}
        id="ModalWrapper"
      >
        <div className="detailsModal">
          <p className="detailsCloseIcon" onClick={() => setShowEdit(false)}>
            &times;
          </p>
          <EditProfileCard
            data={details}
            className={"detailsContent"}
            id="closeBtn"
          />
        </div>
      </div>
    </div>
  );
};

export default PatientsList;
