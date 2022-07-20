import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";
import Filter from "./Filter";
import { useEffect } from "react";

import { useState } from "react";

function HouseList({ posts, title }) {
  const text = ["Parus", "Avalon", "Lev", "Всі"];
  const [filteredList, setFilteredList] = useState(posts);
  const [selectedDev, setSelectedDev] = useState("Забудовники");
  const [selectedState, setSelectedState] = useState("");

  const filterByDev = (filteredData) => {
    if (selectedDev === "Забудовники" || selectedDev === "Всі") {
      return filteredData;
    }
    const filteredDev = filteredData.filter((post) =>
      post.text.includes(selectedDev)
    );
    return filteredDev;
  };

  const filterByState = (filteredData) => {
    if (!selectedState) {
      return filteredData;
    }

    const filteredDev = filteredData.filter(
      (post) => post.label === selectedState
    );
    return filteredDev;
  };

  const handleDevChange = (text) => {
    setSelectedDev(text);
    console.log(text);
  };

  const handleYearChange = (event) => {
    const inputState = String(event.target.id);

    if (inputState === selectedState) {
      setSelectedState("");
      console.log("");
    } else {
      setSelectedState(inputState);
    }
    console.log(inputState);
  };

  useEffect(() => {
    var filteredData = filterByDev(posts);
    filteredData = filterByState(filteredData);
    setFilteredList(filteredData);
  }, [selectedDev, selectedState]);

  return (
    <div className="house" id="realEstate">
      <h1 className="house--text">{title}</h1>
      <span className="house--select">
        <Filter
          options={text}
          setSelected={handleDevChange}
          selected={selectedDev}
        />

        {/* <h5 className="house--text">Cтан будівництва:</h5> */}
        <div id="year-options" onClick={handleYearChange}>
          <div
            className={
              selectedState === "В проєкті" ? "active-option" : "filter-option"
            }
            id="В проєкті"
          >
            В проєкті
          </div>
          <div
            className={
              selectedState === "Будується" ? "active-option" : "filter-option"
            }
            id="Будується"
          >
            Будується
          </div>
          <div
            className={
              selectedState === "Збудований" ? "active-option" : "filter-option"
            }
            id="Збудований"
          >
            Збудований
          </div>
        </div>
      </span>
      <div className="house__container">
        <div className="house__wrapper">
          <ul className="house__items">
            {filteredList.map((post) => (
              <HouseItem
                post={post}
                src={post.src}
                label={post.label}
                text={post.text}
                key={post.id}
                site={post.site}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HouseList;
