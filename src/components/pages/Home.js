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
import Loader from "../Loader";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(" http://localhost:3000/posts");
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, [currentPage]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);

    console.log(pageNumber);
  };

  return (
    <>
      <PreSection />
      {loading ? (
        <Loader />
      ) : (
        <HouseList posts={currentPosts} title="Новобудови Львова" />
      )}

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={handleClick}
        currentPage={currentPage}
      />
      <Footer />
    </>
  );
}

export default Home;
