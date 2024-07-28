import React, { useState } from "react";
import { Pagination } from "../Pagination/Pagination";

const PaginationTest: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 1000;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="app">
      <h1>Pagination Component Demo</h1>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default PaginationTest;
