import React from "react";
import { Edit } from "react-feather";
import StudentAttribute from "./StudentAttribute";

const StudentDetails = () => {
  return (
    <div>
      <div className="card">
        <div className="card-head">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Student Avatar"
            />
          </div>
          <div className="profile">
            <div className="profile-top">
              <div className="name">
                <h2>Levi Ackerman</h2>
              </div>
              <div className="icons">
                <Edit />
              </div>
            </div>
            <div className="profile-bottom">
              Bach. Science in Biomedical Engineering
            </div>
          </div>
        </div>
        <div className="card-details">
          <StudentAttribute attribute="First Name" value="Levi" />
          <StudentAttribute attribute="Last Name" value="Ackerman" />
          <StudentAttribute attribute="Class" value="Six" />
          <StudentAttribute attribute="Student ID" value="1800721101" />
          <StudentAttribute attribute="Gender" value="Male" />
          <StudentAttribute attribute="Date of birth" value="1999-03-25" />
          <StudentAttribute attribute="Nationality" value="Eldian" />
          <StudentAttribute attribute="District" value="Trost" />
          <StudentAttribute attribute="Next of Kin" value="Mikasa Ackerman" />
          <StudentAttribute attribute="House" value="Survey Cops" />
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
