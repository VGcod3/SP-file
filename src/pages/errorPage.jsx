import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <main className="main container">
        <h1>
          Упс! виникла <span className="greeen-marker"> помилка 404</span>
        </h1>

        <p className="description-label">
          Даної сторінки не існує. Будь ласка, поверніться на головну.
        </p>
        <Link to="/">
          <button className="custom-button greeen-fill">на головну</button>
        </Link>
        <hr />
      </main>
    </>
  );
};

export default ErrorPage;
