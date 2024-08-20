import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../slices/PostSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector(state => ({
    currentPage: state.posts.currentPage,
    totalPages: Math.ceil(state.posts.posts.length / 6), // Assuming 6 posts per page
  }));

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="flex justify-center mt-6">
      {/* Previous Button */}
      <button
        className={`px-4 py-2 mx-1 bg-gray-200 rounded-lg ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &lt; Previous
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`px-4 py-2 mx-1 rounded-lg ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      {/* Next Button */}
      <button
        className={`px-4 py-2 mx-1 bg-gray-200 rounded-lg ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next &gt;
      </button>
    </div>
  );
};

export default Pagination;
