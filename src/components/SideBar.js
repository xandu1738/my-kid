import React, { useState } from "react";
import DrawerContent from "./DrawerContent";

const SideBar = () => {
  return (
    <div className="draw-package">
      <div className="app-drawer">
        <DrawerContent />
      </div>
    </div>
  );
};

export default SideBar;
