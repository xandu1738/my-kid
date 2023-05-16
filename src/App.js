import { useState } from "react";
import MainPage from "./components/MainPage";
import SideBar from "./components/SideBar";
import "./css/app.css";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const clicked = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <div className="app">
      {showSidebar && <SideBar />}
      <MainPage toggle={clicked} />
    </div>
  );
}

export default App;
