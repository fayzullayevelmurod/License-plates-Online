import { Button } from "./Button";

export const Header = () => {
  return (
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
        <a className="lk" href="#!">
          ЛК
        </a>
      </div>
    </header>
  );
};
