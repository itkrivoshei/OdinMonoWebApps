import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';
import './Restaurant.scss';

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main className='restaurant-main'>
      <div className='tab-container'>
        <button
          className={`tab-button ${activeTab === 'Home' ? 'active' : ''}`}
          onClick={() => setActiveTab('Home')}
        >
          Home
        </button>
        <button
          className={`tab-button ${activeTab === 'Contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('Contact')}
        >
          Contact
        </button>
        <button
          className={`tab-button ${activeTab === 'Menu' ? 'active' : ''}`}
          onClick={() => setActiveTab('Menu')}
        >
          Menu
        </button>
      </div>
      <div className='content'>
        {activeTab === 'Home' && <Home />}
        {activeTab === 'Contact' && <Contact />}
        {activeTab === 'Menu' && <Menu />}
      </div>
    </main>
  );
};

export default Restaurant;
