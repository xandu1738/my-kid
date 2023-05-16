import React from "react";
import { Menu } from "react-feather";

const DrawerToggle = ({ handleClick }) => {
  return (
    <div>
      <Menu
        className="drawer-toggle"
        style={{ margin: "10px", cursor: "pointer" }}
        onClick={handleClick}
      />
    </div>
  );
};

export default DrawerToggle;
