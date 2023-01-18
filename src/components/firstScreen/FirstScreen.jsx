import React from "react";
import "./firstScreen.scss";

const FirstScreen = () => {
  return (
    <section className="main noisy">
      <div className="container custom-container">
        <h1>Перший крос&shy;платформовий файлообмінник</h1>
        <h4>Обмінюйтесь файлами без сторонніх програм</h4>
        <div className="button-block">
          <button className="custom-button greeen-fill">Завантажити</button>
          <button className="custom-button green-outline black-fill">
            Гайд
          </button>
        </div>

        <hr />
      </div>
    </section>
  );
};

export default FirstScreen;
