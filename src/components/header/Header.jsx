import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Turn as Hamburger } from "hamburger-react";
import useCheckMobileScreen from "../../hooks/useCheckMobileScreen";
import { CSSTransition } from "react-transition-group";

import "./header.scss";

const RightMenu = ({ clickHanle }) => {
  return (
    <nav className="menuPopup">
      <ul>
        <li>
          <Link className="nav-link" onClick={clickHanle} to="/">
            Завантажити файл
          </Link>
        </li>
        <li>
          <Link className="nav-link" onClick={clickHanle} to="/">
            Скачати файл
          </Link>
        </li>
        <li>
          <Link className="nav-link" onClick={clickHanle} to="/">
            Завантажити фото
          </Link>
        </li>
        <li>
          <Link className="nav-link" onClick={clickHanle} id="auth" to="/">
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  const isMobile = useCheckMobileScreen(990);
  const [isOpenedSidebar, setIsOpenedSidebar] = useState(false);

  useEffect(() => {
    if (isOpenedSidebar) {
      document.querySelector("body").classList.add("no-scroll");
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }
  }, [isOpenedSidebar]);

  const toggleOpen = useCallback(() => setIsOpenedSidebar(!isOpenedSidebar));

  return (
    <header className="header">
      <Container className="navbar__wrap">
        <Link className="navbar-brand" to="/">
          SP FILE
        </Link>

        {isMobile ? (
          <>
            <Hamburger
              toggled={isOpenedSidebar}
              toggle={toggleOpen}
              color="#00e091"
              direction="right"
            />
            {isOpenedSidebar && <RightMenu clickHanle={toggleOpen} />}
          </>
        ) : (
          <nav>
            <ul>
              <li>
                <Link className="nav-link" to="/">
                  Завантажити файл
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Скачати файл
                </Link>
              </li>
              <li>
                <Link className="nav-link" to="/">
                  Завантажити фото
                </Link>
              </li>
              <li>
                <Link className="nav-link" id="auth" to="/">
                  LOGIN
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
};

export default Header;
