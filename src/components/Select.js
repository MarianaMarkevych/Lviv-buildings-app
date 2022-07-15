import React, { useState } from "react";
import "./Select.css";

const Select = ({ options, title, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  // const handleClick = () => {
  //   setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        style={{
          background: isOpen ? "#4674c8" : "",
          color: isOpen ? "white" : "",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
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

export default Select;
