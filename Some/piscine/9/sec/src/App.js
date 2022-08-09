import React, { useState } from 'react';
import Counter from './Components/Counter.jsx';
import Input from './Components/Input.jsx';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import Post from './Components/Post.jsx';
import PostsList from './Components/PostsList.jsx';

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
  const [postsList2, setPostsList2] = useState([
    {
      id: 1,
      title: 'dddddddddddddddddddd',
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

  return (
    <div className='App'>
      <Counter />
      <Input />
      <ClassCounter />
      <PostsList postsList={postsList} title='Post list 1' />
      <PostsList postsList={postsList2} title='Post list 1' />
    </div>
  );
}

export default App;
