import React, { useState } from "react";
import "./Select.css";

const MySelect = ({ options, title, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={() => setIsOpen(!isOpen)}>
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          <h1 className="dropdown-text">{title} </h1>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={(e) => {
                setSelected(option);
                setIsOpen(true);
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
