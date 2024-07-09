import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(searchPosts(query));
      navigate('/search');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="search-bar"
      />
      <button type="submit" className="search-bar-button">Search</button>
    </form>
  );
}

export default SearchBar;
