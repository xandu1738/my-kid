import React from "react";
import UserAvatar from "./UserAvatar";

const Teachers = () => {
  return (
    <div className="student-support">
      <div className="title">Teachers</div>
      <div className="body">
        <div className="support-person">
          <UserAvatar
            name="Theo Magath"
            imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDLLOIKp26lChBDEuOgWhgpWrAhLYPWNAVPA&usqp=CAU"
            position="Physics, Mathematics"
          />
        </div>
        <div className="support-person">
          <UserAvatar
            name="Dr. Pixis"
            imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKvXvQxHCdhX-i4dzqa4v32pGPU3JJZEpYA&usqp=CAU"
            position="English, Lit in English"
          />
        </div>
        <div className="support-person">
          <UserAvatar
            name="Erwin Smith"
            imgLink="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcIEbKLDtIzf6KOjQmgQJa968fq7D3qJliQ&usqp=CAU"
            position="Biology, Chemistry"
          />
        </div>
      </div>
    </div>
  );
};

export default Teachers;
