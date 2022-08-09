import React from 'react';

const Post = ({ postInfo }) => {
  return (
    <div className='post'>
      <div className='post__text'>
        <h2>
          {postInfo.id}. {postInfo.title}
        </h2>
        <p>{postInfo.text}</p>
      </div>
      <button>Button</button>
    </div>
  );
};

export default Post;
