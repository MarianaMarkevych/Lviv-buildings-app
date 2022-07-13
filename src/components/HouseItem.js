import React from "react";
import "./Houses.css";

import { useState } from "react";

function HouseItem(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <li
        className="house__item"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="house__item__appear">
          <div className="house__item__pic-wrap" data-category={props.label}>
            <img
              className="house__item__img"
              alt="Parus Smart"
              src={props.src}
            />
          </div>
        </div>
        {isHovering && (
          <div className="house__item__info">
            <span className="house__item__span">
              <h2 className="house__item__text">{props.text}</h2>
              <button className="house__item__btn">{props.site}</button>
            </span>
          </div>
        )}
      </li>
    </>
  );
}

export default HouseItem;
