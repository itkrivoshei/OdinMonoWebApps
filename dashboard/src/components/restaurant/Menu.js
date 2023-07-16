import React from 'react';
import './Menu.scss';

const menuData = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    description:
      'Classic Italian pasta dish with a rich and savory meat sauce.',
    price: '$12.99',
  },
  {
    id: 2,
    name: 'Caesar Salad',
    description:
      'Crisp romaine lettuce tossed in a tangy Caesar dressing, topped with homemade croutons and shaved Parmesan cheese.',
    price: '$8.99',
  },
  {
    id: 3,
    name: 'Margherita Pizza',
    description:
      'Timeless pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
    price: '$10.99',
  },
];

const Menu = () => {
  return (
    <div className='menu-container'>
      {menuData.map((item) => (
        <div key={item.id} className='menu-item'>
          <h2 className='menu-item-name'>{item.name}</h2>
          <p className='menu-item-description'>{item.description}</p>
          <p className='menu-item-price'>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
