import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";
import Filter from "./Filter";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";

function HouseList({ title }) {
  const labels = ["В проєкті", "Будується", "Збудований", "Всі"];
  const text = ["Parus Smart", "Avalon", "Всі"];
  const [selected, setSelected] = useState("Cтан будівництва");
  const [posts, setPosts] = useState([]);

  function getFilteredPosts() {
    if (
      selected === "Cтан будівництва" ||
      selected === "Всі" ||
      selected === "Забудовники"
    ) {
      return posts;
    }
    return posts.filter((post) => post.label === selected);
  }
  const filteredPosts = useMemo(getFilteredPosts, [selected, posts]);

  function handleCategoryChange(label) {
    setSelected(label);
  }
  function getFilteredText() {
    if (selected === "Забудовники") {
      return posts;
    }
    return posts.filter((post) => post.label === selected);
  }

  function handleCategoryChange1(text) {
    setSelected(text);
  }

  useEffect(() => {
    setPosts(defaultPosts);
  }, []);
  const defaultPosts = [
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
          options={labels}
          // title="Cтан будівництва:"
          setSelected={handleCategoryChange}
          selected="Cтан будівництва"
        />
        <Filter
          options={text}
          selected="Забудовники"
          setSelected={handleCategoryChange1}
        />
      </span>
      <div className="house__container">
        <div className="house__wrapper">
          <ul className="house__items">
            {filteredPosts.map((post) => (
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
