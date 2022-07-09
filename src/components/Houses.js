import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";

function Houses() {
  return (
    <div className="house" id="realEstate">
      <h1>Новобудови Львова</h1>
      <div className="house__container">
        <div className="house__wrapper">
          <ul className="house__items">
            <HouseItem
              src="images/img-1.jpg"
              text="Parus Smart"
              label="Зданий в експлуатацію"
            />
            <HouseItem
              src="images/img-2.jpg"
              text="Parus Premium"
              label="Будується"
            />
            <HouseItem
              src="images/img-3.jpg"
              text="Parus City"
              label="В проєкті"
            />
          </ul>
          <ul className="house__items">
            <HouseItem
              src="images/img-1.jpg"
              text="Parus Smart"
              label="Зданий в експлуатацію"
            />
            <HouseItem
              src="images/img-2.jpg"
              text="Parus Premium"
              label="Будується"
            />
            <HouseItem
              src="images/img-3.jpg"
              text="Parus City"
              label="В проєкті"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Houses;
