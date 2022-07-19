// import React from "react";
// // import {getPagesArray} from "../../../utils/pages";
// import "./Pagination.css";

// const Pagination = ({ totalPosts, postsPerPage, page, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   return (
//     <div className="page__wrapper">
//       {pageNumbers.map((p) => (
//         <span
//           onClick={() => paginate(p)}
//           key={p}
//           className={page === p ? "page page__current" : "page"}
//         >
//           {p}
//         </span>
//       ))}
//     </div>
//   );
// };

// export default Pagination;
import React from "react";
import "./Pagination.css";
import { Link } from "react-router-dom";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <Link
              onClick={() => paginate(number)}
              to={number}
              className="page-link"
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
