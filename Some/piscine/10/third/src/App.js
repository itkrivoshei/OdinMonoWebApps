import React, { useRef, useState } from 'react';
import Counter from './Components/Counter.jsx';
import Input from './Components/Input.jsx';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
// import Post from './Components/Post.jsx';
import PostsList from './Components/PostsList.jsx';
import MyButton from './UI/button/MyButton.jsx';
import MyInput from './UI/input/MyInput.jsx';

function App() {
  const [postsList, setPostsList] = useState([
    {
      id: 1,
      title: 'First title',
      text: 'Do esse magna irure ex fugiat culpa.',
    },
    {
      id: 2,
      title: 'Pis',
      text: 'Do esse magna irure ex fugiat culpa.',
    },
    {
      id: 3,
      title: 'Lis',
      text: 'Do esse magna irure ex fugiat culpa.',
    },
  ]);
  // const [postsList2, setPostsList2] = useState([
  //   {
  //     id: 1,
  //     title: 'dddddddddddddddddddd',
  //     text: 'Do esse magna irure ex fugiat culpa.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Pis',
  //     text: 'Do esse magna irure ex fugiat culpa.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Lis',
  //     text: 'Do esse magna irure ex fugiat culpa.',
  //   },
  // ]);

  const [post, setPost] = useState({ title: '', text: '' });
  // const titleInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    // console.log(titleInputRef.current.value);
    setPostsList([...postsList, { ...post, id: Date.now() }]);
    setPost({ title: '', text: '' });
  };

  return (
    <div className='App'>
      <Counter />
      <Input />
      <ClassCounter />
      <PostsList postsList={postsList} title='Post list 1' />
      {/* <PostsList postsList={postsList2} title='Post list 1' /> */}
      <form>
        {/* Control */}
        <MyInput
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          value={post.title}
          type='text'
          placeholder='Header'
        />
        {/* No Control */}
        {/* <MyInput ref={(e) => titleInputRef} type='text' placeholder='Header' /> */}
        <MyInput
          onChange={(e) => setPost({ ...post, text: e.target.value })}
          value={post.text}
          type='text'
          placeholder='Text'
        />
        <MyButton onClick={addNewPost}>Push</MyButton>
      </form>
    </div>
  );
}

export default App;
