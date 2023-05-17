import React from "react";
import UserAvatar from "./UserAvatar";

const StudentSupport = () => {
  return (
    <div className="student-support">
      <div className="title">Parents</div>
      <div className="body">
        <div className="support-person">
          <UserAvatar
            name="Hange Zoe"
            imgLink="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            position="Mother"
          />
        </div>
        <div className="support-person">
          <UserAvatar
            name="Mikasa Ackerman"
            imgLink="https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWFsc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60https://plus.unsplash.com/premium_photo-1671634085198-bbfd1c2a0fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            position="Aunt"
          />
        </div>
        <div className="support-person">
          <UserAvatar
            name="Zeke Yaeger"
            imgLink="https://plus.unsplash.com/premium_photo-1671634085198-bbfd1c2a0fef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmFza2V0YmFsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            position="Father"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentSupport;
