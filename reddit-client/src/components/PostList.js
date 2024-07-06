// src/components/PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostItem from './PostItem';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://www.reddit.com/r/popular.json')
      .then(response => setPosts(response.data.data.children))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      {posts.map(post => (
        <PostItem key={post.data.id} post={post.data} />
      ))}
    </div>
  );
}

export default PostList;
