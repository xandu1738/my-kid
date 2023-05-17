import React from "react";
import { CheckCircle, ChevronDown } from "react-feather";

const EnrollmentTile = () => {
  return (
    <div className="enrollment">
      <div className="item">
        <div className="head">Status</div>
        <div className="body">
          <div className="leading">
            <CheckCircle style={{ color: "green" }} />
            <div className="title">Enrolled</div>
          </div>
          <div className="trailing">
            <ChevronDown
              style={{
                marginLeft: "5px",
                paddingTop: "7px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollmentTile;
