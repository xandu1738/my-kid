import React from "react";
import { CreditCard } from "react-feather";

const GeneratePrn = () => {
  return (
    <div className="container">
      <CreditCard style={{height:"150px",alignSelf:"center", width:"150px", color:"green"}}/>
      <label className="prn" htmlFor="prn">
        Enter Amount to pay
      </label>
      <input className="prn-form" type="text" name="prn" id="prn" />
      <input className="submit-prn" type="button" value="Generate" />
    </div>
  );
};

export default GeneratePrn;
