// components/Pagination.js
import React from "react";
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
const Pagination = ({ currentPage, totalPages, onPageChange ,items,totalItems}) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="h-12 flex justify-between mx-8 px-4 shawdow-md bg-[#f8f4f480] rounded-md items-center ">
     <p>{items} from {totalItems}</p>
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-white mx-2 px-1 py-1"
      >
        <AiOutlineLeft />
      </button>
      {pageNumbers.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => onPageChange(pageNumber)}
          className={`bg-white mx-2 px-2  ${currentPage === pageNumber ? "active" : ""}`}
        >
          {pageNumber}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-white mx-2 px-1 py-1"
      >
      <AiOutlineRight/>
      </button>
    </div>
    </div>
  );
};

export default Pagination;
