import React, { useRef, useState } from 'react';
import './styles/App.css';
import PostsList from './Components/PostsList.jsx';
import PostForm from './Components/PostForm.jsx';
// import Counter from './Components/Counter.jsx';
// import Input from './Components/Input.jsx';
// import ClassCounter from './Components/ClassCounter.jsx';
// import Post from './Components/Post.jsx';
// import MyButton from './UI/button/MyButton.jsx';
// import MyInput from './UI/input/MyInput.jsx';

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

  const createPost = (newPost) => {
    setPostsList([...postsList, newPost]);
  };

  const deletePost = (post) => {
    setPostsList(postsList.filter((pst) => pst.id !== post.id));
  };

  return (
    <div className='App'>
      {/* <Counter />
      <Input />
      <ClassCounter /> */}
      <PostForm postCreate={createPost} />
      <PostsList
        postDelete={deletePost}
        postsList={postsList}
        title='Post list 1'
      />
    </div>
  );
}

export default App;
