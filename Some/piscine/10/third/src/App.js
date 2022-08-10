import React, { useRef, useState } from 'react';
import Counter from './Components/Counter.jsx';
import Input from './Components/Input.jsx';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
// import Post from './Components/Post.jsx';
import PostsList from './Components/PostsList.jsx';
// import MyButton from './UI/button/MyButton.jsx';
// import MyInput from './UI/input/MyInput.jsx';
import PostForm from './Components/PostForm.jsx';

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

  const postUpd = (newPost) => {
     setPostsList([...postsList, newPost])
  }

  return (
    <div className='App'>
      <Counter />
      <Input />
      <ClassCounter />
      <PostsList postsList={postsList} title='Post list 1' />
      <PostForm postCreate={postUpd} />
    </div>
  );
}

export default App;
