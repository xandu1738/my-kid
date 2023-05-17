import React from "react";

const UserAvatar = ({ name, position, action, imgLink }) => {
  return (
    <div className="user-account">
      <div className="img">
        <img src={imgLink} alt="photo of user" />
      </div>
      <div className="details">
        <div className="uname">{name}</div>
        <div className="position">{position}</div>
      </div>
      <div className="logout">{action}</div>
    </div>
  );
};

export default UserAvatar;
