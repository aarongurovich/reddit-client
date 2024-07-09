import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://www.reddit.com/comments/${id}.json`)
      .then(response => {
        setPost(response.data[0].data.children[0].data);
        setComments(response.data[1].data.children);
      })
      .catch(error => console.error('Error fetching post details:', error));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.selftext_html }} />
      <h2>Comments</h2>
      {comments.map(comment => (
        <div key={comment.data.id}>
          <p>{comment.data.body}</p>
          <small>{comment.data.author}</small>
        </div>
      ))}
    </div>
  );
}

export default PostDetail;
