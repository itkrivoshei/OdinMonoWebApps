import React, { useState } from 'react';
import Home from './Home';
import Contact from './Contact';
import Menu from './Menu';

const Restaurant = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main>
      <div>
        <button onClick={() => setActiveTab('Home')}>Home</button>
        <button onClick={() => setActiveTab('Contact')}>Contact</button>
        <button onClick={() => setActiveTab('Menu')}>Menu</button>
      </div>
      {activeTab === 'Home' && <Home />}
      {activeTab === 'Contact' && <Contact />}
      {activeTab === 'Menu' && <Menu />}
    </main>
  );
};

export default Restaurant;
