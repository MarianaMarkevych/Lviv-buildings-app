import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import Houses from "../Houses";
import Footer from "../Footer";
import "../Houses.css";
import { useState } from "react";
import Select from "../Select";

function Home() {
  const labels = ["В проєкті", "Будується", "Зданий в експлуатацію"];
  const text = ["Parus", "Avalon"];
  const [selected, setSelected] = useState("Фільтр");
  const [filteredResults, setFilteredResults] = useState([]);

  // // варіант 1
  React.useEffect(() => {
    const filterResults = posts.filter((post) => post.label === selected);
    setFilteredResults(filterResults);
    console.log(filterResults);
  }, [selected]);

  const searchItems = (label) => {
    setSelected(label);
    console.log(label);
  };
  // // варіант 2
  // const searchItems = (label) => {
  //   setSelected(label);
  //   console.log(label);
  // };

  //   if (selected !== "") {
  //     const filteredPost = [...posts].filter((post) => post.label === label);
  //     setFilteredResults(filteredPost);
  //     console.log(filteredPost);
  //   } else {
  //     setFilteredResults(posts);
  //     console.log(posts);
  //   }
  // };

  // const developerFiltered = (text) => {
  //   setSelected(text);
  //   const devfiltered =
  //     text === "Всі" ? posts : posts.filter((post) => post.text === text);
  //   setPosts(devfiltered);
  // };
  const [posts, setPosts] = useState([
    {
      id: 1,
      src: "images/img-1.jpg",
      text: "Parus Smart",
      label: "Зданий в експлуатацію",
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
      label: "Зданий в експлуатацію",
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
  ]);
  return (
    <>
      <PreSection />
      <h1 className="house--text">Новобудови Львова</h1>
      <span className="house--select">
        <Select
          options={labels}
          title="Cтан будівництва:"
          // defaultValue="Фільтр"
          setSelected={searchItems}
          selected="Фільтр"
        />
        <Select
          options={text}
          selected="Забудовники"
          setSelected={setSelected}
        />
      </span>
      <Houses posts={posts} />
      <Footer />
    </>
  );
}

export default Home;
