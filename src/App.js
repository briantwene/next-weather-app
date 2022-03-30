import React, { useEffect, useState } from "react";
import axios from "axios";
import CityDetails from "./pages/CityDetails";
import "./css/Global.css";
import styles from "./layout.module.scss";
import NavBar from "./components/nav/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import SearchCity from "./pages/SearchCity";

function App() {
  const [location, setLocation] = useState({});
  return (
    <div className={styles.appConatiner}>
      <div className={styles.pageContainer}>
        {/* {weatherData && <CityDetails weather={weatherData} />} */}

        <Routes>
          <Route path="/weather" element={<CityDetails city={location} />} />
          <Route path="/" element={<SearchCity setLocation={setLocation} />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <div className={styles.navContainer}>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
