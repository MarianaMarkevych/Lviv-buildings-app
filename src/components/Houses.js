import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";
import { useState } from "react";
import Select from "./Select";

function Houses({ title }) {
  const labels = ["Всі", "В проєкті", "Будується", "Зданий в експлуатацію"];
  const text = ["Всі", "Parus", "Avalon"];
  const [selected, setSelected] = useState("");

  const labelFiltered = (label) => {
    setSelected(label);
    const filtered =
      label === "Всі" ? posts : posts.filter((post) => post.label === label);
    setPosts(filtered);
  };

  const developerFiltered = (text) => {
    setSelected(text);
    const devfiltered =
      text === "Всі" ? posts : posts.filter((post) => post.text === text);
    setPosts(devfiltered);
  };
  // const postFiltered = (label) => {
  //   setSelected(label);
  //   if (label === "В проєкті") {
  //     const filtered = posts.filter((post) => post.label === "В проєкті");
  //     setPosts(filtered);
  //     console.log(filtered);
  //   } else if (label === "Будується") {
  //     const filtered = posts.filter((post) => post.label === "Будується");
  //     setPosts(filtered);
  //     console.log(filtered);
  //   } else if (label === "Зданий в експлуатацію") {
  //     const filtered = posts.filter(
  //       (post) => post.label === "Зданий в експлуатацію"
  //     );
  //     setPosts(filtered);
  //     console.log(filtered);
  //   }
  // };

  const [posts, setPosts] = useState([
    {
      id: 1,
      src: "images/img-1.jpg",
      text: "Parus Smart",
      label: "Зданий в експлуатацію",
    },
    {
      id: 2,
      src: "images/img-2.jpg",
      text: "Parus Premium",
      label: "В проєкті",
    },
    {
      id: 3,
      src: "images/img-3.jpg",
      text: "Parus City",
      label: "Будується",
    },
    {
      id: 4,
      src: "images/img-4.jpg",
      text: "Avalon Smart",
      label: "Зданий в експлуатацію",
    },
    {
      id: 5,
      src: "images/img-5.jpg",
      text: "Avalon Premium",
      label: "Будується",
    },
    {
      id: 6,
      src: "images/img-6.jpg",
      text: "Avalon Gardens",
      label: "Будується",
    },
  ]);

  return (
    <div className="house" id="realEstate">
      <h1 className="house--text">{title}</h1>
      <span className="house--select">
        <Select
          options={labels}
          title="Cтан будівництва:"
          selected="Фільтр"
          setSelected={labelFiltered}
        />
        <Select
          options={text}
          selected="Забудовники"
          setSelected={developerFiltered}
        />
      </span>
      <div className="house__container">
        <div className="house__wrapper">
          <ul className="house__items">
            {posts.map((post) => (
              <HouseItem
                post={post}
                src={post.src}
                label={post.label}
                text={post.text}
                key={post.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Houses;
