import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import Houses from "../Houses";
import Footer from "../Footer";
import MySelect from "../MySelect";
import { useState } from "react";

import "../Houses.css";

function Home() {
  const [posts, setPosts] = useState();
  const [selected, setSelected] = useState();

  // const filterPosts = (label) => {
  //   posts = posts.filter((post) =>
  //     post.news.find((post) => post.labol === label)
  //   );
  // };
  // setSelected(label);
  // setPosts(posts);

  return (
    <>
      <PreSection />
      <MySelect selected={selected} setSelected={setSelected} />
      <Houses posts={posts} title="Новобудови Львова" />
      <Footer />
    </>
  );
}

export default Home;
