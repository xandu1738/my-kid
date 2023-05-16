import React from "react";

const DrawerListItem = ({ item, icon }) => {
  return (
    <div className="list-item">
      <div className="icon">{icon}</div>
      <div className="item">{item}</div>
    </div>
  );
};

export default DrawerListItem;
