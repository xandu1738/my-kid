import React, { useState } from "react";
import { ChevronDown } from "react-feather";

const SelectItem = ({ icon }) => {
  const [showChildren, setShowChildren] = useState(false);
  return (
    <div>
      <div
        className="list-item"
        onClick={() => {
          setShowChildren(!showChildren);
        }}
      >
        <div className="icon">{icon}</div>
        <div className="item">Payments</div>
      </div>
      <div className="children">
        {showChildren && (
          <div className="children">
            <div className="toggle-list-item">Invoices</div>
            <div className="toggle-list-item">Receipts</div>
            <div className="toggle-list-item">Details</div>
            <div className="toggle-list-item">History</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectItem;
