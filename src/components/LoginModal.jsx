// eslint-disable-next-line react/prop-types
export const LoginModal = ({ showLoginModal }) => {
  return (
    <div
      className={`offer__modal login__modal ${showLoginModal ? "show" : "showOferModal"}`}
    >
      <h2 className="modal__title">Вход в личный кабинет</h2>
      <p>
        Если продавца заинтересует сумма, он свяжется по контактам из вашего
        профиля
      </p>
      <div className="flex__box wrap">
        <div>
          <span className="price">Адрес эл. почты</span>
          <input
            className="price__input"
            type="email"
            name="email"
            placeholder="name@mail.ru"
          />
        </div>
        <div>
          <span className="price">Пароль</span>
          <input
            className="price__input"
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
      </div>
      <div className="flex__box last">
        <button className="blue__btn">Войти</button>
        <a className="forget__password" href="#!">
          Забыл пароль
        </a>
      </div>
      <a href="#!" className="pt-24">
        Войти можно используя социальные сети
      </a>
    </div>
  );
};
