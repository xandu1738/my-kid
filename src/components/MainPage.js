import React from "react";
import NavBar from "./NavBar";
import StudentDetails from "./StudentDetails";
import EnrollmentTile from "./EnrollmentTile";
import StudentSupport from "./StudentSupport";

const MainPage = ({ toggle }) => {
  return (
    <div className="main-page">
      <NavBar toggle={toggle} />
      <div className="body-area">
        <div className="middle">
          <StudentDetails />
        </div>
        <div className="right-side">
          <EnrollmentTile />
          <StudentSupport />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
