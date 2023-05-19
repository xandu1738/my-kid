import { useState } from "react";
import SideBar from "./components/SideBar";
import "./css/app.css";
import Display from "./components/MainPage";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const clicked = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="app">
      {showSidebar && <SideBar />}
      <Display toggle={clicked} />
    </div>
  );
}

export default App;
