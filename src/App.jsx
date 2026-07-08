import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MainBox from "./components/MainBox";
import Playvideo from "./components/Playvideo";

import Style from "./css/App.module.css";

const Home = ({ toggle, setToggle }) => {
  return (
    <div className={Style.layout}>
      <Navbar toggle={toggle} setToggle={setToggle} />

      <div className={Style.mainLayout}>
        <Sidebar toggle={toggle} />
        <MainBox />
      </div>
    </div>
  );
};

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <Routes>
      <Route
        path="/"
        element={<Home toggle={toggle} setToggle={setToggle} />}
      />

      <Route
        path="/video/:id"
        element={<Playvideo />}
      />
    </Routes>
  );
};

export default App;