import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";
import Filter from "./Filter";
import { useEffect } from "react";

import { useState } from "react";

function HouseList({ title }) {
  const text = ["Parus", "Avalon", "Всі"];
  // const label = ["В проєкті", "Будується", "Збудований"];
  const [filteredList, setFilteredList] = useState([]);
  const [selectedDev, setSelectedDev] = useState("Забудовники");
  const [selectedState, setSelectedState] = useState("Cтан будівництва");

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

  const handleBrandChange = (text) => {
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

  const posts = [
    {
      id: 1,
      src: "images/img-1.jpg",
      text: "Parus Smart",
      label: "Збудований",
      site: "parus.smart.lviv.ua",
    },
    {
      id: 2,
      src: "images/img-2.jpg",
      text: "Parus Premium",
      label: "В проєкті",
      site: "paruspremium.com",
    },
    {
      id: 3,
      src: "images/img-3.jpg",
      text: "Parus City",
      label: "Будується",
      site: "parus-city.lviv.ua",
    },
    {
      id: 4,
      src: "images/img-4.jpg",
      text: "Avalon Smart",
      label: "Збудований",
      site: "parus.smart.lviv.ua",
    },
    {
      id: 5,
      src: "images/img-5.jpg",
      text: "Avalon Premium",
      label: "Будується",
      site: "parus.smart.lviv.ua",
    },
    {
      id: 6,
      src: "images/img-6.jpg",
      text: "Avalon Gardens",
      label: "Будується",
      site: "parus.smart.lviv.ua",
    },
  ];

  return (
    <div className="house" id="realEstate">
      <h1 className="house--text">{title}</h1>
      <span className="house--select">
        <Filter
          options={text}
          setSelected={handleBrandChange}
          selected={selectedDev}
        />
        {/* <Filter
          options={label}
          setSelected={handleYearChange}
          selected={selectedState}
        /> */}

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
