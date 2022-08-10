import React from 'react';

const Post = ({ index, postInfo }) => {
  return (
    <div className='post'>
      <div className='post__text'>
        <h2>
          {index}. {postInfo.title}
        </h2>
        <p>{postInfo.text}</p>
      </div>
      <button>Button</button>
    </div>
  );
};

export default Post;
