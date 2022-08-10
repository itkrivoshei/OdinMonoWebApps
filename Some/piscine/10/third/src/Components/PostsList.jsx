import React from 'react';
import Post from './Post.jsx';

const PostsList = ({ postsList, title }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {postsList.map((post) => (
        <Post postInfo={post} key={post.id} />
      ))}
    </>
  );
};

export default PostsList;
