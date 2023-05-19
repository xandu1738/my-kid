import React from "react";
import StudentDetails from "../StudentDetails";
import ResultsChart from "../charts/ResultsChart";
import EnrollmentTile from "../EnrollmentTile";
import StudentSupport from "../StudentSupport";
import Teachers from "../Teachers";

const Dashboard = () => {
  return (
    <div className="body-area">
      <div className="middle">
        <StudentDetails />
        <ResultsChart />
      </div>
      <div className="right-side">
        <EnrollmentTile />
        <StudentSupport />
        <Teachers />
      </div>
    </div>
  );
};

export default Dashboard;
