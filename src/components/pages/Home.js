import React from "react";
import "../../App.css";
import PreSection from "../PreSection";
import HouseList from "../HouseList";
import Footer from "../Footer";
import "../Houses.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../Pagination.css";
import Loader from "../Loader";
import "../Houses.css";
import Filter from "../Filter";
import Pagination from "../Pagination";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const postsPerPage = 6;
  const text = ["Parus", "Avalon", "Lev", "Всі"];
  const [filteredList, setFilteredList] = useState(posts);
  const [selectedDev, setSelectedDev] = useState("Забудовники");
  const [selectedState, setSelectedState] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get(" http://localhost:3000/posts");
      console.log(res.data);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, [postsPerPage, currentPage]);

  const handleDevChange = (text) => {
    setSelectedDev(text);
    setCurrentPage(1);
    console.log(text);
  };

  const handleYearChange = (event) => {
    const inputState = String(event.target.id);

    if (inputState === selectedState) {
      setSelectedState("");

      console.log("");
    } else {
      setSelectedState(inputState);
    }
    console.log(inputState);
    setCurrentPage(1);
  };

  const filterByDev = (filteredData) => {
    if (selectedDev === "Забудовники" || selectedDev === "Всі") {
      return filteredData;
    }
    const filteredDev = filteredData.filter((post) =>
      post.text.includes(selectedDev)
    );
    return filteredDev;
  };

  const filterByState = (filteredData) => {
    if (!selectedState) {
      return filteredData;
    }

    const filteredDev = filteredData.filter(
      (post) => post.label === selectedState
    );
    return filteredDev;
  };

  useEffect(() => {
    let filteredData = filterByDev(posts);
    filteredData = filterByState(filteredData);
    setFilteredList(filteredData);

    setTotalPosts(filteredData.length);

    filteredData.slice(
      (currentPage - 1) * postsPerPage,
      (currentPage - 1) * postsPerPage + postsPerPage
    );
  }, [selectedDev, selectedState, currentPage, posts, postsPerPage]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber);
  };
  return (
    <>
      <PreSection />
      <h1 className="house--text">Новобудови Львова</h1>
      <span className="house--select">
        <Filter
          options={text}
          setSelected={handleDevChange}
          selected={selectedDev}
        />
        <div id="year-options" onClick={handleYearChange}>
          <div
            className={
              selectedState === "В проєкті" ? "active-option" : "filter-option"
            }
            id="В проєкті"
          >
            В проєкті
          </div>
          <div
            className={
              selectedState === "Будується" ? "active-option" : "filter-option"
            }
            id="Будується"
          >
            Будується
          </div>
          <div
            className={
              selectedState === "Збудований" ? "active-option" : "filter-option"
            }
            id="Збудований"
          >
            Збудований
          </div>
        </div>
      </span>

      {loading ? <Loader /> : <HouseList posts={filteredList} />}

      <Pagination
        totalPosts={totalPosts}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />

      <Footer />
    </>
  );
}

export default Home;
