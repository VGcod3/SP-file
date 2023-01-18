import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./loginSection.scss";

const LoginSection = () => {
  const [codeValue, setCode] = useState("Stay228");

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <main className="main container">
      <h1>
        Натисніть на{" "}
        <Link to="https://t.me/StayProject_bot" className="greeen-marker">
          @StayProject_bot
        </Link>
        , отримай код і встав нижче, щоб увійти:
      </h1>

      <input type="text" value={codeValue} onChange={handleChange} />
      <button className="custom-button greeen-fill">Надіслати</button>
      <hr />
    </main>
  );
};

export default LoginSection;
