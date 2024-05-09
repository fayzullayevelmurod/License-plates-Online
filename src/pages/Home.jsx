import assets from "../assets";
import { Numbers } from "../components";
const numbersDB = [
  {
    numberLetterOne: "A",
    number: 111,
    numberLetterTwo: "A",
    numberLetterThree: "A",
    regionNumber: 77,
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 700000,
    s: "Москва",
    x: "Перевес",
    extraText: {
      regionName: "Москва",
      x: "Перевес",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
  {
    numberLetterOne: "A",
    number: 111,
    numberLetterTwo: "A",
    numberLetterThree: "A",
    regionNumber: 77,
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 700000,
    s: "Москва",
    x: "Перевес",
    extraText: {
      regionName: "Москва",
      x: "Перевес",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
  {
    numberLetterOne: "Х",
    number: 111,
    numberLetterTwo: "x",
    numberLetterThree: "o",
    regionNumber: "02",
    sizeIcon: false,
    premium: false,
    regionIcon: true,
    numberPrice: 655000,
    extraText: {
      regionName: "Башкортостан",
      x: "Вместе с авто",
    },
    redText: false,
  },
];
export const Home = () => {
  return (
    <>
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
        <Numbers />
        <div className="promo__img">
          <img src={assets.promoImg} alt="promo img" />
        </div>
        <div className="numbers__table">
          {numbersDB?.map((item, index) => (
            <div key={index} className="number__tr">
              <div className="left__box">
                <div>
                  <span
                    className={`number__text ${
                      item.redText ? "red__text" : ""
                    }`}
                  >
                    {item.numberLetterOne}
                  </span>
                  <span className={`number ${item.redText ? "red__text" : ""}`}>
                    {item.number
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                  </span>
                  <span
                    className={`number__text ${
                      item.redText ? "red__text" : ""
                    }`}
                  >
                    {item.numberLetterTwo}
                  </span>
                  <span
                    className={`number__text ${
                      item.redText ? "red__text" : ""
                    }`}
                  >
                    {item.numberLetterThree}
                  </span>
                </div>
                <div className="region__plate">
                  <div>
                    <span>{item.regionNumber}</span>
                  </div>
                  {item.regionIcon ? (
                    <div className="flex__box">
                      <img src={assets.ru} alt="ru" width={31} height={10} />
                      <img src={assets.setka} alt="ru" width={19} height={10} />
                    </div>
                  ) : null}
                </div>
                <div className="premium__box">
                  {item.sizeIcon ? <img src={assets.xl} alt="" /> : null}
                  {item.premium ? <img src={assets.pencil} alt="" /> : null}
                </div>
              </div>
              <div className="right__box">
                <span className="number__price">
                  {item.numberPrice
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  ₽
                </span>
                <ul className="extra__text">
                  <li>{item.extraText.regionName}</li>
                  <div className="dot"></div>
                  <li>{item.extraText.x}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="about__services">
          <h1 className="title">О сервисе</h1>
          <p className="desc">
            На сайте АВТОНОМЕРА размещены объявления о продаже номеров любого
            региона. Здесь Вы всегда можете продать или купить красивые номера
            на авто. Для того чтобы купить номер автомобиля подберите по фильтру
            желаемый набор символов, свяжитесь с продавцом и переоформите гос
            номер на свой автомобиль.
          </p>
          <p className="desc">
            Также на площадке опубликованы не только красивые автомобильные
            номера, но и такие блатные номера, как спецномер АМР, ЕКХ. Еще на
            сайте присутствует галерея автомобилей, вклад в которую может внести
            каждый зарегистрированный пользователь.
          </p>
          <div className="statistiks__boxes">
            <div className="statistiks__box">
              <span>259</span>
              <p>номеров в продаже</p>
            </div>
            <div className="statistiks__box">
              <span>~27</span>
              <p>продаж в месяц через площадку</p>
            </div>
            <div className="statistiks__box">
              <span>49</span>
              <p>активных продавцов</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
