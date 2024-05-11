import assets from "../assets";

export const Card = () => {
  return (
    <div className="card__page">
      <h1 className="title">продажа номера А777АА 77</h1>
      <p className="title__desc">Размещён 13.01.2024, обновлён 21.02.2024</p>
      <div className="number__info-box">
        <div className="number__boxes">
          <div className="info__box-header">
            <div>
              <span className="number__text red__text">A</span>
              <span className="number red__text">777</span>
              <span className="number__text red__text">A</span>
              <span className="number__text red__text">A</span>
            </div>
            <div className="region__plate">
              <div>
                <span className="number__text">77</span>
              </div>
              <div className="flex__box">
                <img
                  src={assets.ru}
                  alt="ru"
                  width="31"
                  height="10"
                />
                <img
                  src={assets.setka}
                  alt="ru"
                  width="19"
                  height="10"
                />
              </div>
            </div>
          </div>
          <div className="number__price">
            <span className="number__price-text">700 000 ₽</span>
            <div className="flex__box">
              <img src={assets.ruble} alt="" />
              <p>Предложить свою цену</p>
            </div>
          </div>
        </div>
        <div className="status__table">
          <div className="tr">
            <span className="status__text">Регион</span>
            <p>Регион</p>
          </div>
          <div className="tr">
            <span className="status__text">Регион</span>
            <p>Регион</p>
          </div>
        </div>
      </div>
      <div className="number__info-box">
        <div className="user__box">
          <span>Продавец</span>
          <div>
            <div className="flex__box">
              <div className="user__status">
                <div className="img__box"></div>
                <h3>Arkadiy201</h3>
              </div>
              <span>Был на сайте 24.02.2024</span>
            </div>
          </div>
        </div>
        <div className="status__table">
          <div className="tr">
            <span className="status__text">Местоположение</span>
            <p>Москва, Замоскворечье</p>
          </div>
          <div className="tr">
            <span className="status__text">Контакты</span>
            <a href="tel:+79270000000">+7 927 000 00 00</a>
          </div>
        </div>
        <div className="btns">
          <a href="#!">Написать в телеграм</a>
          <a href="#!">Написать в ватсап</a>
          <a href="#!">Написать во вконтакте</a>
        </div>
      </div>
      <div className="complain__box">
        <img
          className="complain__box-img"
          src={assets.numberImg}
          alt="number img"
        />
        <a className="flex__box" href="#!">
          <img src={assets.complainIcon} alt="complain icon" />
          <span>Пожаловаться на номер</span>
        </a>
      </div>
    </div>
  );
};
