import React from "react";
import "./Pagination.css";
import { useState } from "react";
import { useEffect } from "react";

const Pagination = ({ totalPosts, postsPerPage, currentPage, paginate }) => {
  const [showPrev, setPrev] = useState(false);
  const [showNext, setNext] = useState(false);

  const liRender = (number) => (
    <li
      key={number}
      onClick={() => paginate(number)}
      className={currentPage === number ? "active" : null}
    >
      {number}
    </li>
  );
  const prev = () => (
    <button onClick={() => paginate(currentPage - 1)}>❮</button>
  );
  const next = () => (
    <button onClick={() => paginate(currentPage + 1)}>❯</button>
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  useEffect(() => {
    if (currentPage - 1 > 0) {
      setPrev(true);
    } else {
      setPrev(false);
    }

    if (currentPage !== pageNumbers.length) {
      setNext(true);
    } else {
      setNext(false);
    }
  }, [currentPage, pageNumbers.length]);

  return (
    <div className="pageN">
      {showPrev && prev()}
      <ul className="pageNumbers">
        {pageNumbers.map((number) => {
          if (currentPage === number) {
            return (
              <li
                key={number}
                id={number}
                onClick={() => paginate(number)}
                className={currentPage === number ? "active" : null}
              >
                {number}
              </li>
            );
          }
          return liRender(number);
        })}
      </ul>
      {showNext && next()}
    </div>
  );
};
export default Pagination;
