import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='bg-full-black'>
        <div className='normal-width'>
          <ul className='header-tabs'>
            <li className='logo-text'>Welcome!</li>
            <li className='plain-text'>Home</li>
            <li className='plain-text'>About Us</li>
            <li className='plain-text'>Contact</li>
          </ul>
        </div>
      </div>

      <div className='main'>
        <div className='bg-full-black'>
          <div className='normal-width first-main'>
            <div className='text-block'>
              <h1 className='header-white-text'>Discover Our Services</h1>
              <p className='plain-text'>
                Explore a wide range of solutions tailored to meet your needs.
              </p>
              <button className='button'>Learn More</button>
            </div>
            <img
              width='220px'
              src='https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-3938023.jpg&fm=jpg'
              alt='Service Image'
            />
          </div>
        </div>

        <div className='normal-width second-main'>
          <h2 className='header-black-text'>Our Commitment to Quality</h2>
          <div className='img-bar'>
            <ul>
              {Array(4)
                .fill('')
                .map((_, idx) => (
                  <li key={idx}>
                    <img
                      width='220px'
                      src='https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-3938023.jpg&fm=jpg'
                      alt='Quality Image'
                    />
                    <p>Quality Service {idx + 1}</p>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className='bg-full-gray'>
          <div className='normal-width gray-block'>
            <p className='quote-text'>
              We prioritize customer satisfaction and innovative solutions.
            </p>
            <p className='quote-text-ps'>
              <strong>Commitment to Excellence</strong>
            </p>
          </div>
        </div>

        <div className='normal-width'>
          <div className='blue-block'>
            <div>
              <p className='plain-text'>
                <strong>Contact Us Today</strong>
              </p>
              <p className='plain-text'>We are here to help!</p>
            </div>
            <button className='button-blue plain-text'>Get in Touch</button>
          </div>
        </div>
      </div>

      <div className='bg-full-black'>
        <div className='normal-width footer'>
          <p className='plain-text'>Copyright © Your Company Name 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
