import assets from "../assets";
import { Header } from "../components";
export const Home = () => {
  return (
    <>
      <Header />
      <div className="number__box">
        <h1 className="title">
          поиск красивого <br /> автомобильного номера
        </h1>
        <div className="number__filter-boxes">
          <div className="number__filter">
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__text">
              <span>·</span>
            </div>
            <div className="number__group">
              <div className="number__text">
                <span>·</span>
              </div>
              <div className="number__text">
                <span>·</span>
              </div>
              <div className="number__text">
                <span>·</span>
              </div>
            </div>
          </div>
        </div>
        <div className="button__filter">
          <button className="chips">Есть фото</button>
          <button className="chips number__btn">
            <span>10 000 ₽</span>
            <span className="line"></span>
            <span>1 520 000 ₽</span>
          </button>
          <button className="chips">Перевес</button>
          <button className="chips">Вместе с авто</button>
          <button className="chips dropdown">
            <span>Регион</span>
            <div className="plate">
              <img src={assets.ru} alt="ru logo" width={28} height={10} />
            </div>
          </button>
        </div>
        <div className="numbers__table">
          <div className="number__tr">
            <div className="left__box">
              <div>
                <span className="number__text red__text">А</span>
                <span className="number red__text">777</span>
                <span className="number__text red__text">А</span>
                <span className="number__text red__text">А</span>
              </div>
              <div className="region__plate">
                <div>
                  <span>7</span>
                  <span>7</span>
                </div>
                <div className="flex__box">
                  <img src={assets.ru} alt="ru" width={31} height={10} />
                  <img src={assets.setka} alt="ru" width={19} height={10} />
                </div>
              </div>
            </div>
            <div className="right__box"></div>
          </div>
        </div>
      </div>
    </>
  );
};
