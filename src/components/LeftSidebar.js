import React from 'react';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../features/posts/postsSlice';
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'ReactJS', query: 'reactjs' },
  { name: 'JavaScript', query: 'javascript' },
  { name: 'Web Development', query: 'web development' },
  { name: 'Programming', query: 'programming' },
  { name: 'Technology', query: 'technology' },
];

function LeftSidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (query) => {
    dispatch(searchPosts(query));
    navigate('/search');
  };

  return (
    <aside className="sidebar left-sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            <ul onClick={() => handleSearch(category.query)}>{category.name}</ul>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default LeftSidebar;
