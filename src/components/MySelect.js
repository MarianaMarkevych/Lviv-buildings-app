import React, { useState } from "react";
import "./MySelect.css";

const MySelect = ({ selected, setSelected }) => {
  const [isActive, setIsActive] = useState(false);
  const labels = ["В проєкті", "Будується", "Зданий в експлуатацію"];

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>

      {isActive && (
        <div className="dropdown-content">
          <h1 className="dropdown-text">Cтан будівництва: </h1>
          {labels.map((label, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(label);
                setIsActive(false);
              }}
              className="dropdown-item"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MySelect;
