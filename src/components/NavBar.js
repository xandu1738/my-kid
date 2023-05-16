import React from "react";

import DrawerToggle from "./DrawerToggle";
import UserAvatar from "./UserAvatar";

const NavBar = ({toggle}) => {
  return (
    <div>
      <nav>
        <div className="icon"><DrawerToggle handleClick={toggle} /></div>
        <div className="content"><UserAvatar /></div>
      </nav>
    </div>
  );
};

export default NavBar;
