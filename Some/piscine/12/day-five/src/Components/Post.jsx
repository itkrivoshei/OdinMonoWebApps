import React from 'react';
import MyButton from '../UI/button/MyButton';

const Post = ({ ...props }) => {
  return (
    <div className='post'>
      <div className='post__text'>
        <h2>
          {props.index}. {props.postInfo.title}
        </h2>
        <p>{props.postInfo.text}</p>
      </div>
      <MyButton onClick={() => props.postDelete(props.postInfo)}>
        Delete
      </MyButton>
    </div>
  );
};

export default Post;
