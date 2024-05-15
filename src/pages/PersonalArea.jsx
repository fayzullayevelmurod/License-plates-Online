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
                <button className="edit__prifile">Редактировать профиль</button>
              </div>
              <div className="personal__card-body">
                <div className="box">
                  <span>Номер телефона</span>
                  <div className="flex__box">
                    <a className="tel" href="tel:+79270000000">
                      +7 927 000 00 00
                    </a>
                    <div className="social__media">
                      <a className="telegram__icon" href="#!">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.43 8.85893C11.2628 9.3444 8.93014 10.3492 5.43189 11.8733C4.86383 12.0992 4.56626 12.3202 4.53917 12.5363C4.49339 12.9015 4.95071 13.0453 5.57347 13.2411C5.65818 13.2678 5.74595 13.2954 5.83594 13.3246C6.44864 13.5238 7.27283 13.7568 7.70129 13.766C8.08994 13.7744 8.52373 13.6142 9.00264 13.2853C12.2712 11.079 13.9584 9.96381 14.0643 9.93977C14.139 9.92281 14.2426 9.90148 14.3128 9.96385C14.3829 10.0262 14.376 10.1443 14.3686 10.176C14.3233 10.3691 12.5281 12.0381 11.5991 12.9018C11.3095 13.171 11.1041 13.362 11.0621 13.4056C10.968 13.5033 10.8721 13.5958 10.78 13.6846C10.2108 14.2333 9.78391 14.6448 10.8036 15.3168C11.2936 15.6397 11.6858 15.9067 12.077 16.1731C12.5042 16.4641 12.9303 16.7543 13.4816 17.1157C13.6221 17.2077 13.7562 17.3034 13.8869 17.3965C14.3841 17.751 14.8307 18.0694 15.3826 18.0186C15.7032 17.9891 16.0345 17.6876 16.2027 16.7884C16.6002 14.6631 17.3816 10.0585 17.5622 8.16097C17.578 7.99473 17.5581 7.78197 17.5422 7.68857C17.5262 7.59518 17.4928 7.46211 17.3714 7.3636C17.2276 7.24694 17.0056 7.22234 16.9064 7.22408C16.455 7.23203 15.7626 7.47282 12.43 8.85893Z" fill="#A3A3A3" />
                        </svg>
                      </a>
                      <a className="whatsapp__icon" href="#!">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 24L1.687 17.837C0.645998 16.033 0.0989998 13.988 0.0999998 11.891C0.103 5.335 5.43799 0 11.993 0C15.174 0.001 18.16 1.24 20.406 3.488C22.6509 5.736 23.8869 8.724 23.8859 11.902C23.8829 18.459 18.548 23.794 11.993 23.794C10.003 23.793 8.04198 23.294 6.30499 22.346L0 24ZM6.59698 20.193C8.27298 21.188 9.87298 21.784 11.989 21.785C17.437 21.785 21.875 17.351 21.878 11.9C21.88 6.438 17.463 2.01 11.997 2.008C6.54498 2.008 2.11 6.442 2.108 11.892C2.107 14.117 2.75899 15.783 3.85399 17.526L2.85499 21.174L6.59698 20.193ZM17.984 14.729C17.91 14.605 17.712 14.531 17.414 14.382C17.117 14.233 15.656 13.514 15.383 13.415C15.111 13.316 14.913 13.266 14.714 13.564C14.516 13.861 13.946 14.531 13.773 14.729C13.6 14.927 13.426 14.952 13.129 14.803C12.832 14.654 11.874 14.341 10.739 13.328C9.85598 12.54 9.25898 11.567 9.08598 11.269C8.91298 10.972 9.06798 10.811 9.21598 10.663C9.34998 10.53 9.51298 10.316 9.66198 10.142C9.81298 9.97 9.86198 9.846 9.96198 9.647C10.061 9.449 10.012 9.275 9.93698 9.126C9.86198 8.978 9.26798 7.515 9.02098 6.92C8.77898 6.341 8.53398 6.419 8.35198 6.41L7.78198 6.4C7.58398 6.4 7.26198 6.474 6.98998 6.772C6.71798 7.07 5.94999 7.788 5.94999 9.251C5.94999 10.714 7.01498 12.127 7.16298 12.325C7.31198 12.523 9.25798 15.525 12.239 16.812C12.948 17.118 13.502 17.301 13.933 17.438C14.645 17.664 15.293 17.632 15.805 17.556C16.376 17.471 17.563 16.837 17.811 16.143C18.059 15.448 18.059 14.853 17.984 14.729Z" fill="#A3A3A3" />
                        </svg>
                      </a>
                      <a className="vk__icon" href="#!">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.68707 1.68707C0 3.37413 0 6.0894 0 11.52V12.48C0 17.9106 0 20.6259 1.68707 22.313C3.37413 24 6.0894 24 11.52 24H12.48C17.9106 24 20.6259 24 22.313 22.313C24 20.6259 24 17.9106 24 12.48V11.52C24 6.0894 24 3.37413 22.313 1.68707C20.6259 0 17.9106 0 12.48 0H11.52C6.0894 0 3.37413 0 1.68707 1.68707ZM4.05006 7.30005C4.18006 13.54 7.30005 17.2901 12.7701 17.2901H13.0801V13.72C15.0901 13.92 16.61 15.3901 17.22 17.2901H20.06C19.28 14.4501 17.2299 12.8801 15.95 12.2801C17.2299 11.5401 19.0299 9.74005 19.4599 7.30005H16.8799C16.3199 9.28005 14.6601 11.08 13.0801 11.25V7.30005H10.5V14.22C8.9 13.8201 6.88005 11.88 6.79005 7.30005H4.05006Z" fill="#A3A3A3" />
                        </svg>
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
            className={`tab__content table__tab-content ${activeTab === 1 ? "show" : ""
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
