import { useState } from "react";
import { Button } from "./Button";
import { LoginModal } from "./LoginModal";

export const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => {
    setShowLoginModal(!showLoginModal);
    document.body.classList.toggle("no__scroll");
  };
  return (
    <>
      <LoginModal showLoginModal={showLoginModal} />
      <div
        className={`overlay ${showLoginModal ? "show" : ""}`}
        onClick={handleShowLoginModal}
      ></div>
      <header className="header">
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#!">
                Каталог автономеров
              </a>
            </li>
            <div className="dot"></div>
            <li className="nav__item">
              <a className="nav__link" href="#!">
                Переоформление
              </a>
            </li>
            <div className="dot"></div>
            <li className="nav__item">
              <a className="nav__link" href="#!">
                Номерные рамки
              </a>
            </li>
          </ul>
        </nav>
        <div className="right__box">
          <Button text={"Продать номер"} />
          <a className="lk" href="#!" onClick={handleShowLoginModal}>
            ЛК
          </a>
        </div>
      </header>
    </>
  );
};
