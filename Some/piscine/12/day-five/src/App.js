import React, { useState, useMemo } from 'react';
import './styles/App.css';
import PostsList from './Components/PostsList.jsx';
import PostForm from './Components/PostForm.jsx';
import MySelect from './UI/select/MySelect.jsx';
import MyInput from './UI/input/MyInput.jsx';
// import Counter from './Components/Counter.jsx';
// import Input from './Components/Input.jsx';
// import ClassCounter from './Components/ClassCounter.jsx';
// import Post from './Components/Post.jsx';
// import MyButton from './UI/button/MyButton.jsx';

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

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const createPost = (newPost) => {
    setPostsList([...postsList, newPost]);
  };

  const deletePost = (post) => {
    setPostsList(postsList.filter((pst) => pst.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  };

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...postsList].sort((a, b) =>
        a[selectedSort].localeCompare(b[selectedSort])
      );
    } else return postsList;
  }, [selectedSort, postsList]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedPosts]);

  return (
    <div className='App'>
      {/* <Counter />
      <Input />
      <ClassCounter /> */}
      <PostForm postCreate={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MyInput
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='search'
      />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Sort by:'
        options={[
          { name: 'By title', value: 'title' },
          {
            name: 'By text',
            value: 'text',
          },
        ]}
      />
      {sortedAndSearchedPosts.length ? (
        <PostsList
          postDelete={deletePost}
          postsList={sortedAndSearchedPosts}
          title='Post list'
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>No posts</h1>
      )}
    </div>
  );
}

export default App;
