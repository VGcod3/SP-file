import React from "react";
import "./description.scss";

const Description = () => {
  return (
    <section className="description container-fluid noisy">
      <h2>Що пропонує SP File?</h2>

      <div className="cards row">
        <div className="card col-lg-4 col-md-6 col-12">
          <span className="card-title">БЕЗ ОБМЕЖЕНЬ</span>
          <p className="card-text">
            Ти можеш завантажити стільки файлів, скільки бажаєш. Це твій вибір,
            твоє право
          </p>
        </div>
        <div className="card col-lg-4 col-md-6 col-12">
          <span className="card-title">ЦІНА</span>
          <p className="card-text">
            Хтось назве нас дурнями, але завантаження навіть 10 TB файлів буде
            все одно безкоштовно
          </p>
        </div>
        <div className="card col-lg-4 col-md-6 col-12">
          <span className="card-title">БЕЗПЕКА</span>
          <p className="card-text">
            Ти можеш поставити обмеження на к-сть завантажень, і після цієї
            цифри не скачати файл
          </p>
        </div>
        <div className="card col-lg-4 col-md-6 col-12">
          <span className="card-title">ЗАРОБІТОК</span>
          <p className="card-text">
            Ти можеш поставити ціну завантаження файлу, і 100% коштів з
            завантаження іншими користувачами підуть саме тобі
          </p>
        </div>
        <div className="card col-lg-4 col-md-6 col-12">
          <span className="card-title">СТАТИСТИКА</span>
          <p className="card-text">
            Ми єдині на ринку хто дозволяє побачити статистику файлу, і весь час
            стараємось розширити її
          </p>
        </div>
      </div>

      <div className="description-bottom row">
        <div className="hr-wrapper col-10 col-md-3">
          <hr />
        </div>
        <div className="d-bottom-text col-12 col-md-6">
          <span>
            SP File - це файлообмінник який вже зараз обіграє конкурентів по
            функціоналу, але, на жаль, не в силі потягатись кількістю
            користувачів
          </span>
        </div>
        <div className="hr-wrapper col-10 col-md-3">
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Description;
