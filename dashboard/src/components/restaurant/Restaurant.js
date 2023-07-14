import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import './Restaurant.scss';

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main className='main-container'>
      <div className='button-container'>
        <button className='nav-button' onClick={() => setActiveTab('Home')}>
          Home
        </button>
        <button className='nav-button' onClick={() => setActiveTab('Contact')}>
          Contact
        </button>
        <button className='nav-button' onClick={() => setActiveTab('Menu')}>
          Menu
        </button>
      </div>
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Contact' && <Contact />}
      {activeTab === 'Menu' && <Menu />}
    </main>
  );
};

export default Restaurant;
