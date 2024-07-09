// src/components/PostList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PostItem from './PostItem';
import { fetchPopularPosts, searchPosts } from '../features/posts/postsSlice';

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const searchResults = useSelector((state) => state.posts.searchResults);
  const isLoading = useSelector((state) => state.posts.isLoading);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/') {
      dispatch(fetchPopularPosts());
    }
  }, [dispatch, location.pathname]);

  const displayPosts = location.pathname === '/search' ? searchResults : posts;

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="post-list">
          {displayPosts.map((post) => (
            <PostItem key={post.data.id} post={post.data} />
          ))}
        </div>
      )}
    </div>
  );
}

export default PostList;
