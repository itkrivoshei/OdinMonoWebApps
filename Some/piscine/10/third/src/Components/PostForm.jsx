import React, { useState } from 'react';
import MyButton from '../UI/button/MyButton.jsx';
import MyInput from '../UI/input/MyInput.jsx';

const PostForm = ({ postCreate, postDelete }) => {
  const [post, setPost] = useState({ title: '', text: '' });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    postCreate(newPost);
    setPost({ title: '', text: '' });
  };

  return (
    <form>
      <MyInput
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        value={post.title}
        type='text'
        placeholder='Header'
      />
      <MyInput
        onChange={(e) => setPost({ ...post, text: e.target.value })}
        value={post.text}
        type='text'
        placeholder='Text'
      />
      <MyButton onClick={addNewPost}>Push</MyButton>
    </form>
  );
};

export default PostForm;
