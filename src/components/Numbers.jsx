import assets from "../assets";
const numbersDB = [
  {
    numberLetterOne: "A",
    number: 777,
    numberLetterTwo: "A",
    numberLetterThree: "A",
    regionNumber: 77,
    sizeIcon: true,
    premium: true,
    regionIcon: true,
    numberPrice: 700000,
    s: "Москва",
    x: "Перевес",
    extraText: {
      regionName: "Москва",
      x: "Перевес",
    },
    redText: true,
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
    premium: true,
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
export const Numbers = () => {
  return (
    <div className="numbers__table">
      {numbersDB?.map((item, index) => (
        <div key={index} className="number__tr">
          <div className="left__box">
            <div>
              <span
                className={`number__text ${item.redText ? "red__text" : ""}`}
              >
                {item.numberLetterOne}
              </span>
              <span className={`number ${item.redText ? "red__text" : ""}`}>
                {item.number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
              </span>
              <span
                className={`number__text ${item.redText ? "red__text" : ""}`}
              >
                {item.numberLetterTwo}
              </span>
              <span
                className={`number__text ${item.redText ? "red__text" : ""}`}
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
                  <img src={assets.rusTwo} alt="ru" width={31} height={10} />
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
  );
};
