import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import HouseList from "../HouseList";
import Footer from "../Footer";
import "../Houses.css";

function Home() {
  const posts = [
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
  ];

  return (
    <>
      <PreSection />
      <HouseList posts={posts} title="Новобудови Львова" />
      <Footer />
    </>
  );
}

export default Home;
