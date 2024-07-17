import React, { useState } from 'react';

const SearchBar = ({ onSearch, images }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={() => handleSearch()}>Search</button>
    </div>
  );
};

export default SearchBar;
