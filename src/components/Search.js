import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <div className={styles.search}>
      <div>
        <i className="bx bx-search-alt"></i>
        <input type="text" placeholder="Пошук..." />
      </div>
    </div>
  );
};

export default Search;
