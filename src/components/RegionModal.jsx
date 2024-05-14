const regionDB = [
  { regionName: "Адыгея", regionNumber: "01" },
  { regionName: "Башкортостан", regionNumber: "02, 102, 702" },
  { regionName: "Бурятия", regionNumber: "03, 103" },
  { regionName: "Алтай", regionNumber: "04" },
  { regionName: "Дагестан", regionNumber: "05" },
  { regionName: "Ингушетия", regionNumber: "06" },
  { regionName: "Кабардино-Балкария", regionNumber: "07" },
  { regionName: "Калмыкия", regionNumber: "08" },
  { regionName: "Карачаево-Черкесия", regionNumber: "09" },
  { regionName: "Карелия", regionNumber: "10" },
  { regionName: "Коми", regionNumber: "11, 111" },
  { regionName: "Марий Эл", regionNumber: "12" },
];
// eslint-disable-next-line react/prop-types
export const RegionModal = ({ showRegionModal, handleShowRegionModal }) => {
  return (
    <div className={`region__modal ${showRegionModal ? "show" : ""}`}>
      <button className="close__modal" onClick={handleShowRegionModal}></button>
      <div className="scoll__box">
        <div className="region__modal-content">
          {regionDB?.map((item, indx) => (
            <div className="flex__box" key={indx}>
              <h5>{item.regionName}</h5>
              <span>{item.regionNumber}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
