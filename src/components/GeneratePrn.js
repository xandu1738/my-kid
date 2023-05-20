import React from "react";

const GeneratePrn = () => {
  return (
    <>
      <div className="container">
        <div className="payment-tracker">
          <div className="paid">
            Shs. 5000 Cleared | <span style={{ color: "green" }}>50%</span>
          </div>
          <div className="due">
            Shs. 5000 Balance | <span style={{ color: "red" }}>50%</span>
          </div>
        </div>
        <label className="prn" htmlFor="prn">
          Enter Amount to pay
        </label>
        <input className="prn-form" type="text" name="prn" id="prn" />
        <input className="submit-prn" type="button" value="Generate" />
      </div>
    </>
  );
};

export default GeneratePrn;
