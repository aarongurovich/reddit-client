// src/components/PostItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  return (
    <div>
      <img src={post.thumbnail} alt={post.title} />
      <Link to={`/post/${post.id}`}>{post.title}</Link>
      <p>{post.author}</p>
    </div>
  );
}

export default PostItem;
