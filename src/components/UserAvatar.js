import React from "react";
import { LogOut } from "react-feather";

const UserAvatar = () => {
  return (
    <div className="user-account">
      <div className="img">
        <img
          src="https://images.unsplash.com/photo-1619976336288-38db38e4c503?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlc3MlMjBwaWVjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="photo of user"
        />
      </div>
      <div className="details">
        <div className="uname">Eren Yeager</div>
        <div className="position">Coordinator</div>
      </div>
      <div className="logout">
        <LogOut />
      </div>
    </div>
  );
};

export default UserAvatar;
