import React from "react";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container row">
        <div className="col-12 col-md-6">
          <div className="right">
            <div>Завантажити/скачати файл через Telegram</div>
            <div>
              <a href="https://t.me/StayFile_bot">@StayFile_bot</a>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6 order-md-first">
          <div className="left">© Всі права захищені 2023</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
