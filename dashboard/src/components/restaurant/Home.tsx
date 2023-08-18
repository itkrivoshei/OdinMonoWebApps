import React from 'react';
import './Home.scss';

const Home = () => {
  return (
    <div className='home-container'>
      <h1 className='home-title'>Welcome to our Restaurant</h1>
      <div className='home-img-container'>
        <img
          src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
          alt='Dish on white ceramic plate'
          className='home-img'
        />
      </div>
    </div>
  );
};

export default Home;
