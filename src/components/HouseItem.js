import React from "react";

function HouseItem(props) {
  return (
    <>
      <li className="house__item">
        <div className="house__item__link">
          <figure className="house__item__pic-wrap" data-category={props.label}>
            <img
              className="house__item__img"
              alt="Parus Smart"
              src={props.src}
            />
          </figure>

          <div className="house__item__info">
            <h1 className="house__item__text">{props.text}</h1>
          </div>
        </div>
      </li>
    </>
  );
}

export default HouseItem;
