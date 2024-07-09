// src/components/SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
      navigate('/search');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Reddit"
        className="search-bar"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
