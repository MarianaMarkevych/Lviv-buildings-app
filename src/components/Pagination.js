import React from "react";
import "./Pagination.css";

const Pagination = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="pageN">
      <ul className="pageNumbers">
        {pageNumbers.map((number) => (
          <li
            key={number}
            id={number}
            onClick={() => paginate(number)}
            className={currentPage === number ? "active" : null}
          >
            {number}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
