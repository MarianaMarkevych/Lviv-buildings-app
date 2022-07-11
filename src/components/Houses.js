import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";
import { useState } from "react";

function Houses({ title }) {
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
      label: "В проєкті",
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
      <h1> {title}</h1>

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
