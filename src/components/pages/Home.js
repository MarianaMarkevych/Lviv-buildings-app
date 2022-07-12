import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import Houses from "../Houses";
import Footer from "../Footer";
import "../Houses.css";

function Home() {
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

  return (
    <>
      <PreSection />
      <Houses title="Новобудови Львова" />
      <Footer />
    </>
  );
}

export default Home;
