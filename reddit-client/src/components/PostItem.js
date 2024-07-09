// src/components/PostItem.js
import React from 'react';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  const getImageUrl = () => {
    if (post.preview && post.preview.images && post.preview.images[0].source.url) {
      return post.preview.images[0].source.url.replace(/&amp;/g, '&');
    }
    return post.thumbnail && post.thumbnail !== 'self' && post.thumbnail !== 'default' ? post.thumbnail : null;
  };

  const imageUrl = getImageUrl();

  return (
    <div className="post-item">
      <div className="post-content">
        <Link to={`/post/${post.id}`}>{post.title}</Link>
        {imageUrl && (
          <img src={imageUrl} alt={post.title} className="post-image" />
        )}
        <p>Posted by {post.author}</p>
        <p>{post.selftext}</p>
      </div>
    </div>
  );
}

export default PostItem;
