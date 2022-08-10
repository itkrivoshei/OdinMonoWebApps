import React from 'react';
import Post from './Post.jsx';

const PostsList = ({ postsList, title }) => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {postsList.map((post, index) => (
        <Post index={index} postInfo={post} key={post.id} />
      ))}
    </>
  );
};

export default PostsList;
