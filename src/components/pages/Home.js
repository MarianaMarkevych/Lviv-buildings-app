import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import Houses from "../Houses";
import Footer from "../Footer";
import MySelect from "../MySelect";

import { useState } from "react";

import "../Houses.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [selected, setSelected] = useState("");

  const filterPosts = (option) => {
    setSelected(option);
    const filtered = posts.filter((post) => post.label === option);
    setPosts(filtered);
    console.log(filtered);
  };

  // const handleBtns = (e) => {
  //   let word = e.target.value;

  //   if (word === "В проєкті") {
  //     const filtered = posts.filter((post) => post.label === "В проєкті");
  //     setPosts(filtered);
  //   } else if (word === "Будується") {
  //     const filtered = posts.filter((post) => post.label === "Будується");
  //     setPosts(filtered);
  //   } else if (word === "Зданий в експлуатацію") {
  //     const filtered = posts.filter(
  //       (post) => post.label === "Зданий в експлуатацію"
  //     );
  //     setPosts(filtered);
  //   }
  // };
  return (
    <>
      <PreSection />
      {/* <PostFilter
        value={selected}
        onChange={filterPosts}
        defaultValue="Фільтр"
        options={[
          { value: "В проєкті" },
          { value: "Будується" },
          { value: "Зданий в експлуатацію" },
        ]}
      /> */}
      <MySelect selected={selected} setSelected={filterPosts} />
      <Houses title="Новобудови Львова" />
      <Footer />
    </>
  );
}

export default Home;
