import { useContext } from "react";
import styles from "./ProductNumber.module.css";
import PropTypes from "prop-types";
import { ProductContext } from "../../Context/ProductContext";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function ProductNumber() {
  const { currentPage, totalPages, paginate } = useContext(ProductContext);

  return (
    <div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
}

const Pagination = ({ totalPages, currentPage, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className={styles.paginationNav}>
      <ul className={styles.paginationList}>
        {/* previous */}
        <li
          className={`${styles.pageIcon} ${
            currentPage === 1 ? styles.disabled : ""
          }`}
        >
          <a
            onClick={() => currentPage > 1 && paginate(currentPage - 1)}
            href="#!"
            className="page-link"
          >
            <GrFormPrevious className={styles.moveicon} />
          </a>
        </li>

        {/* middle */}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`${styles.pageItem} ${
              number === currentPage ? styles.active : ""
            }`}
          >
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
        {/* stop */}

        {/* next */}
        <li
          className={`${styles.pageIcon} ${
            currentPage === totalPages ? styles.disabled : ""
          }`}
        >
          <a
            onClick={() =>
              currentPage < totalPages && paginate(currentPage + 1)
            }
            href="#!"
            className="page-link"
          >
            <MdOutlineNavigateNext className={styles.moveicon} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

// import { useContext } from "react";
// import styles from "./ProductNumber.module.css";
// import PropTypes from "prop-types";
// import { ProductContext } from "../../Context/ProductContext";
// import { GrFormPrevious } from "react-icons/gr";
// import { MdOutlineNavigateNext } from "react-icons/md";

// export default function ProductNumber() {
//   const { currentPage, totalPages, paginate } = useContext(ProductContext);

//   return (
//     <div>
//       <Pagination
//         totalPages={totalPages}
//         currentPage={currentPage}
//         paginate={paginate}
//       />
//     </div>
//   );
// }

// const Pagination = ({ totalPages, currentPage, paginate }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= totalPages; i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className={styles.paginationNav}>
//       <ul className={styles.paginationList}>
//         {/* previous */}
//         <li
//           className={`${styles.pageIcon} ${
//             currentPage === 1 ? "disabled" : ""
//           }`}
//         >
//           <a
//             onClick={() => currentPage > 1 && paginate(currentPage - 1)}
//             href="#!"
//             className="page-link"
//           >
//             <GrFormPrevious className={styles.moveicon} />
//           </a>
//         </li>

//         {/* middle */}
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`${styles.pageItem} ${
//               number === currentPage ? styles.active : ""
//             }`}
//           >
//             <a onClick={() => paginate(number)} href="#!" className="page-link">
//               {number}
//             </a>
//           </li>
//         ))}
//         {/* stop */}

//         {/* next */}
//         <li
//           className={`${styles.pageIcon} ${
//             currentPage === totalPages ? "disabled" : ""
//           }`}
//         >
//           <a
//             onClick={() =>
//               currentPage < totalPages && paginate(currentPage + 1)
//             }
//             href="#!"
//             className="page-link"
//           >
//             <MdOutlineNavigateNext className={styles.moveicon} />
//           </a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// Pagination.propTypes = {
//   pageNumbers: PropTypes.arrayOf(PropTypes.number),
//   currentPage: PropTypes.number.isRequired,
//   paginate: PropTypes.func.isRequired,
//   totalPages: PropTypes.number.isRequired,
// };
