import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ErrorPage from "../../pages/errorPage";
import LoginPage from "../../pages/loginPage";
import WatchCode from "../../pages/watchCode";
import WatchText from "../../pages/watchText";
import MainPage from "../../pages/mainPage";

import Footer from "../footer/Footer.jsx";
import Header from "../header/Header.jsx";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App wrapper noisy noGap">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/text" element={<WatchText />} />
          <Route path="/code" element={<WatchCode />} />
          <Route path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
