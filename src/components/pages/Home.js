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
  const [selected, setSelected] = useState("Фільтр");
  // const [label, setLabel] = useState("Фільтр");

  const postFiltered = (label) => {
    setSelected(label);
    const filtered = posts.filter((post) => post.label === label);
    setPosts(filtered);
    console.log(filtered);
  };

  // useEffect(() => {
  //   console.log(label);
  //   // setSelected(
  //   //   label === "Фільтр" ? posts : posts.filter((post) => post.label === label)
  //   // );
  // }, [label]);

  //   if (option === "В проєкті") {
  //     const filtered = posts.filter((post) => post.label === "В проєкті");
  //     setPosts(filtered);
  //     console.log(filtered);
  //   } else if (option === "Будується") {
  //     const filtered = posts.filter((post) => post.label === "Будується");
  //     setPosts(filtered);
  //     console.log(filtered);
  //   } else if (option === "Зданий в експлуатацію") {
  //     const filtered = posts.filter(
  //       (post) => post.label === "Зданий в експлуатацію"
  //     );
  //     setPosts(filtered);
  //     console.log(filtered);
  //   }
  // };

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
      <h1 className="house--text">Новобудови Львова</h1>

      <MySelect selected={selected} setSelected={postFiltered} />

      <Houses posts={posts} />
      <Footer />
    </>
  );
}

export default Home;
