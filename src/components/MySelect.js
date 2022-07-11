import React, { useState } from "react";
import "./Houses";

const MySelect = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const options = ["В проєкті", "Будується", "Зданий в експлуатацію"];
  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        Фільтр
        <span className="fas fa-caret-down"></span>
      </div>

      {isActive && (
        <div className="dropdown-content">
          <h1 className="dropdown-text">Cтан будівництва </h1>
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySelect;
