import React from "react";

const Pagination = ({ totalPosts, postPerPage, currentPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex justify-center mt-6 w-full">
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={`px-4 py-2 mx-1 ${currentPage === page ? 'bg-blue-800' : 'bg-blue-600'} text-white font-semibold rounded-md hover:bg-blue-700`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default Pagination;
