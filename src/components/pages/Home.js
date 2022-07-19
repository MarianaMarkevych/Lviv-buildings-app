import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import HouseList from "../HouseList";
import Footer from "../Footer";
import "../Houses.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Pagination from "../Pagination";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(" http://localhost:3000/posts");
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PreSection />
      <HouseList posts={currentPosts} title="Новобудови Львова" />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
      <Footer />
    </>
  );
}

export default Home;
