import React from "react";
import { LogOut } from "react-feather";
import DrawerToggle from "./DrawerToggle";
import UserAvatar from "./UserAvatar";

const NavBar = ({ toggle }) => {
  return (
    <div>
      <nav>
        <div className="icon">
          <DrawerToggle handleClick={toggle} />
        </div>
        <div className="content">
          <UserAvatar
            name="Eren Yaeger"
            position="Cadet"
            imgLink="https://images.unsplash.com/photo-1619976336288-38db38e4c503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBwaWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            action=<LogOut />
          />
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
