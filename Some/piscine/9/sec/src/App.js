import React from 'react';
import Counter from './Components/Counter.jsx';
import Input from './Components/Input.jsx';
import ClassCounter from './Components/ClassCounter.jsx';
import './styles/App.css';
import Post from './Components/Post.jsx';

function App() {
  return (
    <div className='App'>
      <Counter />
      <Input />
      <ClassCounter />
      <Post />
    </div>
  );
}

export default App;
