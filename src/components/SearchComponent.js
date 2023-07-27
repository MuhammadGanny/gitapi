import React, { useState, useRef } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const searchTextTimeoutRef = useRef();

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchText(value);

    if (searchTextTimeoutRef.current) {
      clearTimeout(searchTextTimeoutRef.current);
    }

    searchTextTimeoutRef.current = setTimeout(() => {
      onSearch(value);
    }, 2000);
  };

  return (
    <div className="search">
      <h3>User Search</h3>
      <input
        type="text"
        placeholder="Search GitHub User"
        value={searchText}
        onChange={handleInputChange} 
        className="searchbar"
      />
    </div>
  );
};

export default SearchComponent;

