import { useState } from "react";
import assets from "../assets";
import { OfferPrices } from "../components/OfferPrices";

const saleDB = [
  {
    data: "12.02.2024",
    number: "А777АА 77",
    status: "в продаже",
    price: "1 700 000 ₽",
    type: "Вместе с авто",
    statistics: "1 009 / 42",
    pencilIcon: assets.pencil2,
    trashIcon: assets.trash,
    statusClass: "blue",
  },
  {
    data: "12.02.2024",
    number: "А777АА 77",
    status: "в продаже",
    price: "1 700 000 ₽",
    type: "Вместе с авто",
    statistics: "1 009 / 42",
    pencilIcon: assets.pencil2,
    trashIcon: assets.trash,
    statusClass: "blue",
    modalBtn: "+2 предложения",
  },
  {
    data: "12.02.2024",
    number: "А777АА 77",
    status: "в продаже",
    price: "1 700 000 ₽",
    type: "Вместе с авто",
    statistics: "1 009 / 42",
    pencilIcon: assets.pencil2,
    trashIcon: assets.trash,
    statusClass: "yellow",
  },
  {
    data: "12.02.2024",
    number: "А777АА 77",
    status: "в продаже",
    price: "1 700 000 ₽",
    type: "Вместе с авто",
    statistics: "1 009 / 42",
    pencilIcon: assets.pencil2,
    trashIcon: assets.trash,
    statusClass: "green",
  },
];

export const PersonalArea = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div
        className={`overlay ${showModal ? "show" : ""}`}
        onClick={handleShowModal}
      ></div>
      <OfferPrices showModal={showModal} handleShowModal={handleShowModal} />
      <div className="personal__area">
        <h1 className="title">личный кабинет</h1>
        <div className="tab">
          <div className="tab__header">
            {["Мои данные", "Номера в продаже"].map((tab, index) => (
              <span
                key={index}
                className={`tab__item ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                {tab}
              </span>
            ))}
          </div>
          <div className={`tab__content ${activeTab === 0 ? "show" : ""}`}>
            <div className="personal__card">
              <div className="personal__card-header">
                <div className="left__box">
                  <div className="user__img"></div>
                  <h4 className="user__name">Arkadiy201</h4>
                </div>
                <p className="edit__prifile">Редактировать профиль</p>
              </div>
              <div className="personal__card-body">
                <div className="box">
                  <span>Номер телефона</span>
                  <div className="flex__box">
                    <a className="tel" href="tel:+79270000000">
                      +7 927 000 00 00
                    </a>
                    <div className="social__media">
                      <a href="#!">
                        <img src={assets.telegram} alt="telegram icon" />
                      </a>
                      <a href="#!">
                        <img src={assets.whatsapp} alt="telegram icon" />
                      </a>
                      <a href="#!">
                        <img src={assets.vk} alt="telegram icon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="box">
                  <span>Местоположение</span>
                  <a href="#!">Москва, Замоскворечье</a>
                </div>
                <div className="box">
                  <span>Описание</span>
                  <p>Помогу с переоформлением</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`tab__content table__tab-content ${
              activeTab === 1 ? "show" : ""
            }`}
          >
            <table border={1}>
              <thead>
                <tr>
                  <td>Дата</td>
                  <td>Номер</td>
                  <td>Статус</td>
                  <td>Стоимость</td>
                  <td>Тип продажи</td>
                  <td>Статистика</td>
                  <td>Действия</td>
                </tr>
              </thead>
              <tbody>
                {saleDB.map((item, index) => (
                  <tr key={index}>
                    <td>{item.data}</td>
                    <td>{item.number}</td>
                    <td>
                      <span className={`status__box ${item.statusClass}`}>
                        {item.status}
                      </span>
                    </td>
                    <td>
                      {item.price}
                      <span className="modal__btn" onClick={handleShowModal}>
                        {item.modalBtn}
                      </span>
                    </td>
                    <td>{item.type}</td>
                    <td>{item.statistics}</td>
                    <td className="icons">
                      <button>
                        <img src={item.pencilIcon} alt="" />
                      </button>
                      <button>
                        <img src={item.trashIcon} alt="" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
