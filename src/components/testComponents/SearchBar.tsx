import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

const SearchBarTest: React.FC = () => {
  const handleSearch = (query: string) => {
    console.log("Search query:", query);
  };

  return (
    <div className="search-bar-test">
      <SearchBar placeholder="Search..." onSearch={handleSearch} />
    </div>
  );
};

export default SearchBarTest;
