import React from "react";

const Payment = ({ prn, date, amount, reason }) => {
  return (
    <div className="card">
      <div className="title">PRN: {prn}</div>
      <div className="subtitle">
        Shs {amount} {reason}
      </div>
      <div className="details">{date}</div>
    </div>
  );
};

export default Payment;
