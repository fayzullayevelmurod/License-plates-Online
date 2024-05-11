import { useEffect, useRef, useState } from "react";

export const SellNumber = () => {
  const inputs = useRef([]);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    let newValue = value;

    // Agar input birinchi yoki 5-6 chi bo'lsa
    if (index === 0 || index === 4 || index === 5) {
      // Faqat harflarni qabul qilish
      newValue = value.replace(/[^a-zA-Z]/g, "");
    } else {
      // Faqat raqamlarni qabul qilish
      newValue = value.replace(/\D/g, "");
    }

    event.target.value = newValue;

    if ((index === 0 || index === 4 || index === 5) && newValue.length === 1) {
      // Keyingi inputga o'tkazish
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const [value, setValue] = useState(""); // Input qiymati

  // Qiymat o'zgarganda holatni yangilash
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const input = document.querySelector(".price__input");
    if (value === "") {
      input.setAttribute("placeholder", "0 ₽");
    } else {
      input.setAttribute("placeholder", "₽");
    }
  }, [value]);

  return (
    <div className="sell__number">
      <h1 className="title">продать номер</h1>
      <p className="title__desc">укажите полный номер в форме ниже</p>
      <div className="number__filter-boxes">
        <div className="number__filter">
          {[...Array(6)].map((_, index) => (
            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              type="text"
              className="number__text"
              placeholder="."
              onChange={(event) => handleInputChange(index, event)}
            />
          ))}
        </div>
        <div className="number__group">
          {[...Array(3)].map((_, index) => (
            <input
              key={index + 6}
              ref={(el) => (inputs.current[index + 6] = el)}
              type="number"
              className="number__text"
              placeholder="."
              onChange={(event) => handleInputChange(index + 6, event)}
            />
          ))}
        </div>
      </div>
      <div className="basic__data">
        <h3>Основные данные</h3>
        <span>Стоимость</span>
        <div className="flex__box">
          <input
            className="price__input"
            type="number"
            placeholder="0 ₽"
            value={value}
            onChange={handleChange}
          />
          <div className="check__box">
            <input type="checkbox" id="one" />
            <label htmlFor="one">Договорная</label>
          </div>
        </div>
        <div className="tip__box">
          <span>Тип продажи</span>
          <div className="button__filter">
            <button className="chips">Перевес</button>
            <button className="chips">Вместе с авто</button>
          </div>
        </div>
        <div className="img__box">
          <span>Фото (необязательно)</span>
          <div className="set__img-box">
            <span>Добавить фото</span>
          </div>
        </div>
        <button className="blue__btn">Отправить на модерацию</button>
      </div>
    </div>
  );
};
