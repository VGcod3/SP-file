import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const ErrorPage = lazy(() => import("../../pages/errorPage"));
const LoginPage = lazy(() => import("../../pages/loginPage"));
const WatchCode = lazy(() => import("../../pages/watchCode"));
const WatchText = lazy(() => import("../../pages/watchText"));
const MainPage = lazy(() => import("../../pages/mainPage"));

const Spinner = lazy(() => import("../spinner/Spinner"));
/* import ErrorPage from "../../pages/errorPage";
import LoginPage from "../../pages/loginPage";
import WatchCode from "../../pages/watchCode";
import WatchText from "../../pages/watchText";
import MainPage from "../../pages/mainPage"; */

import Footer from "../footer/Footer";
import Header from "../header/Header";

import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div className="App wrapper noisy noGap">
      <Router>
        <Header />
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/text/:fileID" element={<WatchText />} />
            <Route path="/code/:fileID" element={<WatchCode />} />
            <Route path="/" element={<MainPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
