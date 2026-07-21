import "../../styles/kategory/filter.css";
import { useState } from "react";
function Filter() {
  const [openFilter, setOpenFilter] = useState({
    isStudy: true,
    isPrice: true,
    isDuration: true,
  });
  const hideToggle = (key) => {
    setOpenFilter((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };
  return (
    <>
      <div className="filter">
        <div className="filter_head">
          <h3>Filter</h3>
          <button>Reset</button>
        </div>
        <div className="filter_card">
          <span className="filter_icon">
            <ion-icon name="book-outline"></ion-icon>
          </span>{" "}
          <span>Bidang study</span>{" "}
          <span onClick={() => {hideToggle("isStudy")}} className="arrow"></span>
          <ul className={openFilter.isStudy ? "" : "hide"}>
            <li>
              <input type="checkbox" />
              Pemasaran
            </li>
            <li>
              <input type="checkbox" />
              Digital & Teknologi{" "}
            </li>
            <li>
              <input type="checkbox" />
              Pengembangan diri
            </li>
            <li>
              <input type="checkbox" />
              bisnis manajement
            </li>
          </ul>
        </div>
        <div className="filter_card">
          <span className="filter_icon">
            <ion-icon name="mail-outline"></ion-icon>{" "}
          </span>
          <span>Harga</span> <span onClick={() => {hideToggle("isPrice")}} className="arrow"></span>
          <ul className={openFilter.isPrice ? "" : "hide"}>
            <li>
              <input type="checkbox" />
              Pemasaran
            </li>
            <li>
              <input type="checkbox" />
              Digital & Teknologi{" "}
            </li>
            <li>
              <input type="checkbox" />
              Pengembangan diri
            </li>
            <li>
              <input type="checkbox" />
              bisnis manajement
            </li>
          </ul>
        </div>
        <div className="filter_card">
          <span className="filter_icon">
            <ion-icon name="time-outline"></ion-icon>
          </span>
          <span>Durasi</span> <span onClick={() => {hideToggle("isDuration")}} className="arrow"></span>
          <ul className={openFilter.isDuration ? "" : "hide"}>
            <li>
              <input type="checkbox" />
              Pemasaran
            </li>
            <li>
              <input type="checkbox" />
              Digital & Teknologi{" "}
            </li>
            <li>
              <input type="checkbox" />
              Pengembangan diri
            </li>
            <li>
              <input type="checkbox" />
              bisnis manajement
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Filter;
