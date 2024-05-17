import { useRef, useState } from "react";
import assets from "../assets";
import { Numbers } from "../components";
import { RegionModal } from "../components/RegionModal";
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
  const inputs = useRef([]);
  const [showDropDown, setShowDropDown] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [values, setValue] = useState("");
  const [showRegionModal, setShowRegionModal] = useState(false);
  const [placeholders, setPlaceholders] = useState(Array(10).fill("•"));
  const [carNumber] = useState(Array(10).fill(""));
  const [placeholders2, setPlaceholders2] = useState(Array(3).fill("•"));
  const [carNumber2] = useState(Array(3).fill(""));

  const handleShowRegionModal = () => {
    setShowRegionModal(!showRegionModal);
    document.body.classList.toggle("no__scroll");
  };
  const handleShow = () => {
    setShowDropDown(!showDropDown);
    document.body.classList.toggle("no__scroll");
  };
  const handleFocus = (index) => {
    const newPlaceholders = [...placeholders];
    newPlaceholders[index] = "";
    setPlaceholders(newPlaceholders);
  };
  const handleBlur = (index) => {
    const newPlaceholders = [...placeholders];
    if (carNumber[index] === "") {
      newPlaceholders[index] = "•";
    }
    setPlaceholders(newPlaceholders);
  };
  const handleFocus2 = (index) => {
    const newPlaceholders2 = [...placeholders2];
    newPlaceholders2[index] = "";
    setPlaceholders2(newPlaceholders2);
  };
  const handleBlur2 = (index) => {
    const newPlaceholders3 = [...placeholders2];
    if (carNumber2[index] === "") {
      newPlaceholders3[index] = "•";
    }
    setPlaceholders2(newPlaceholders3);
  };
  
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    let newValue = value;
    const newValue2 = event.target.value.slice(0, 1);
    setValue(newValue2);

    if (index === 0 || index === 4 || index === 5) {
      newValue = value.replace(/[^a-zA-Z]/g, "");
    } else {
      newValue = value.replace(/\D/g, "");
      if (newValue.length === 1) {
        if (index < inputs.current.length - 1) {
          inputs.current[index + 1].focus();
        }
      }
    }

    event.target.value = newValue;
    if ((index === 0 || index === 4 || index === 5) && newValue.length === 1) {
      if (index < inputs.current.length - 1 && inputs.current[index + 1]) {
        inputs.current[index + 1].focus();
      }
    }
    if (
      event.nativeEvent.inputType === "deleteContentBackward" &&
      newValue === ""
    ) {
      if (index > 0 && inputs.current[index - 1]) {
        inputs.current[index - 1].focus();
        const newPlaceholders = [...placeholders];
        newPlaceholders[index] = ".";
        setPlaceholders(newPlaceholders);

        const newPlaceholders2 = [...placeholders2];
        newPlaceholders2[index] = ".";
        setPlaceholders2(newPlaceholders2);
        handleBlur(index);
        handleBlur2(index);
      }
    }
  };

  return (
    <>
      <div
        className={`overlay ${showRegionModal ? "show" : ""}`}
        onClick={handleShowRegionModal}
      ></div>
      <div
        className={`overlay__two ${showDropDown ? "show" : ""}`}
        onClick={handleShow}
      ></div>
      <div className="number__box">
        <h1 className="title">
          поиск красивого <br /> автомобильного номера
        </h1>
        <div className="number__filter-boxes">
          <div className="number__filter">
            {[...Array(6)].map((_, index) => (
              <label className="input__label" key={index}>
                <input
                  // key={index}
                  ref={(el) => (inputs.current[index] = el)}
                  type="text"
                  className="number__text"
                  placeholder={placeholders[index]}
                  maxLength={1}
                  onChange={(event) => handleInputChange(index, event)}
                  onFocus={() => handleFocus(index)}
                  onBlur={() => handleBlur(index)}
                />
              </label>
            ))}
          </div>
          <div className="number__group">
            {[...Array(3)].map((_, index) => (
              <input
                key={index + 6}
                ref={(el) => (inputs.current[index + 6] = el)}
                type="text"
                className="number__text"
                placeholder={placeholders2[index]}
                maxLength={1}
                onChange={(event) => handleInputChange(index + 6, event)}
                onFocus={() => handleFocus2(index)}
                onBlur={() => handleBlur2(index)}
              />
            ))}
          </div>
        </div>
        <div className="filter__box button__filter">
          <button className="chips filter__btn" onClick={handleShow}>
            Фильтры
          </button>
          <button className="chips dropdown" onClick={handleShowRegionModal}>
            <span>Регион</span>
            <div className="plate">
              <img src={assets.ru} alt="ru logo" width={28} height={10} />
            </div>
          </button>
        </div>
        <div className={`media__drop ${showDropDown ? "show" : ""}`}>
          <div className="button__filter media__none">
            <button className="close__btn" onClick={handleShow}></button>
            <button className="chips">Есть фото</button>
            {/* <button className="chips number__btn">
              <span>10 000 ₽</span>
              <span className="line"></span>
              <span>1 520 000 ₽</span>
            </button> */}
            <input
              className="chips number__btn"
              type="number"
              placeholder="10 000 ₽ | 1 520 000 ₽"
            />
            <button className="chips">Перевес</button>
            <button className="chips">Вместе с авто</button>
            <button className="chips dropdown" onClick={handleShowRegionModal}>
              <span>Регион</span>
              <div className="plate">
                <img src={assets.ru} alt="ru logo" width={28} height={10} />
              </div>
            </button>
          </div>
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
                      <img
                        src={assets.rusTwo}
                        alt="ru"
                        width={31}
                        height={10}
                      />
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
      <RegionModal
        showRegionModal={showRegionModal}
        handleShowRegionModal={handleShowRegionModal}
      />
    </>
  );
};
