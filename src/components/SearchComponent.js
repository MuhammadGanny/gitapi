import React, { useState, useEffect } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const searchTimeout = setTimeout(() => {
      onSearch(searchText);
    }, 2000);

    return () => clearTimeout(searchTimeout);
  }, [searchText, onSearch]);

  return (
    <div className="search">
        <h3>User Search</h3>
        <input
         type="text"
         placeholder="Search GitHub User"
         value={searchText}
         onChange={(e) => setSearchText(e.target.value)}
         className="searchbar"
        ></input>
  </div>
  );
};

export default SearchComponent;