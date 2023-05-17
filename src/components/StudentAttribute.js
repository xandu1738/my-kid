import React from "react";

const StudentAttribute = ({ attribute, value }) => {
  return (
    <div className="attribute-value">
      <div className="attribute">{attribute}</div>
      <div className="value">{value}</div>
    </div>
  );
};

export default StudentAttribute;
