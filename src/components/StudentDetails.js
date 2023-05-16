import React from "react";

const StudentDetails = () => {
  return (
    <div>
      <div class="card">
        <div className="card-head">
          <div className="avatar">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              alt="Student Avatar"
            />
          </div>
          <div className="profile">
            <div className="name">
              <h2>Levi Ackerman</h2>
            </div>
            <div className="programme">
              <p>Computer Science Student</p>
            </div>
          </div>
        </div>
        <div className="card-details">
          <p>University of Example</p>
          <p>Email: john.doe@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
