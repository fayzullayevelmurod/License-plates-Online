// import { useRef, useState } from "react";

// export const SellNumber = () => {
//   const inputs = useRef([]);
//   // eslint-disable-next-line no-unused-vars
//   const [value, setValue] = useState(""); // Input qiymati

//   const handleInputChange = (index, event) => {
//     const { value } = event.target;
//     let newValue = value;

//     // Input qiymatini o'zgartirish
//     setValue(newValue);

//     if (index === 0 || index === 4 || index === 5) {
//       // Raqam emas bo'lgan belgilarni olib tashlash
//       newValue = value.replace(/[^a-zA-Z]/g, "");
//     } else {
//       // Raqamlarni olib tashlash
//       newValue = value.replace(/\D/g, "");

//       // Fokusni o'zgartirish
//       if (newValue.length === 1) {
//         if (index < inputs.current.length - 1) {
//           inputs.current[index + 1].focus();
//         }
//       }
//     }

//     // Yangi qiymatni inputga joylash
//     event.target.value = newValue;

//     // Keyingi inputga otish
//     if ((index === 0 || index === 4 || index === 5) && newValue.length === 1) {
//       if (index < inputs.current.length - 1) {
//         inputs.current[index + 1].focus();
//       }
//     }
//   };

//   return (
//     <div className="sell__number">
//       <h1 className="title">продать номер</h1>
//       <p className="title__desc">укажите полный номер в форме ниже</p>
//       <div className="number__filter-boxes">
//         <div className="number__filter">
//           {[...Array(6)].map((_, index) => (
//             <label key={index}>
//               <input
//                 ref={(el) => (inputs.current[index] = el)}
//                 type="tel"
//                 className="number__text"
//                 placeholder="."
//                 maxLength={1}
//                 onChange={(event) => handleInputChange(index, event)}
//               />
//             </label>
//           ))}
//         </div>
//         <div className="number__group">
//           {[...Array(3)].map((_, index) => (
//             <input
//               key={index + 6}
//               ref={(el) => (inputs.current[index + 6] = el)}
//               type="tel"
//               className="number__text"
//               placeholder="."
//               maxLength={1}
//               onChange={(event) => handleInputChange(index + 6, event)}
//             />
//           ))}
//         </div>
//       </div>
//       <div className="basic__data">
//         <h3>Основные данные</h3>
//         <span>Стоимость</span>
//         <div className="flex__box">
//           <input
//             className="price__input"
//             type="number"
//             placeholder="0 ₽"
//           />
//           <div className="check__box">
//             <input type="checkbox" id="one" />
//             <label htmlFor="one">Договорная</label>
//           </div>
//         </div>
//         <div className="tip__box">
//           <span>Тип продажи</span>
//           <div className="button__filter">
//             <button className="chips">Перевес</button>
//             <button className="chips">Вместе с авто</button>
//           </div>
//         </div>
//         <div className="img__box">
//           <span>Фото (необязательно)</span>
//           <div className="set__img-box">
//             <span>Добавить фото</span>
//           </div>
//         </div>
//         <button className="blue__btn">Отправить на модерацию</button>
//       </div>
//     </div>
//   );
// };

import { useRef, useState } from "react";

export const SellNumber = () => {
  const inputs = useRef([]);
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(""); // Input qiymati
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
      if (index < inputs.current.length - 1) {
        inputs.current[index + 1].focus();
      }
    }
  };

  // useEffect(() => {
  //   const input = document.querySelector(".price__input");
  //   if (value === "") {
  //     input.setAttribute("placeholder", "0 ₽");
  //   } else {
  //     input.setAttribute("placeholder", "₽");
  //   }
  // }, [value]);

  return (
    <div className="sell__number">
      <h1 className="title">продать номер</h1>
      <p className="title__desc">укажите полный номер в форме ниже</p>
      <div className="number__filter-boxes">
        <div className="number__filter">
          {[...Array(6)].map((_, index) => (
            <label key={index}>
              <input
                // key={index}
                ref={(el) => (inputs.current[index] = el)}
                type="text"
                className="number__text"
                placeholder="."
                maxLength={1}
                onChange={(event) => handleInputChange(index, event)}
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
              placeholder="."
              maxLength={1}
              onChange={(event) => handleInputChange(index + 6, event)}
            />
          ))}
          {window.addEventListener("scroll", () => {
            if (screenY > 100) {
              console.log("salom");
            } else {
              console.log("ishlamadi");
            }
          })}
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
            // value={value}
            // onChange={handleChange}
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
