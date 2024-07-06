import React from 'react';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = (
  { totalPages, currentPage, handlePageChange }
) => {
  const handlePageClick = (pageNumber: number) => {
    handlePageChange(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pagination">
      {[...Array(totalPages)].map((_, index) => {
        const pageNumber = index + 1;
        return (
          <button
            key={pageNumber}
            className={`pagination-btn ${currentPage === pageNumber ? 'active' : ''}`}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
