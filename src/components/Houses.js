import React from "react";
import HouseItem from "./HouseItem";
import "./Houses.css";

function Houses({ posts }) {
  return (
    <div className="house" id="realEstate">
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
