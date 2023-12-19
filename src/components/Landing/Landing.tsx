import React from 'react';
import './Landing.scss';

const Landing = () => {
  return (
    <div className='landing-container'>
      <div className='bg-full-black'>
        <div className='normal-width'>
          <ul className='header-tabs'>
            <li className='logo-text'>Hi there ☝️</li>
            <li className='plain-text'>Gordon</li>
            <li className='plain-text'>Source</li>
            <li className='plain-text'>Ramsey</li>
          </ul>
        </div>
      </div>

      <div className='main'>
        <div className='bg-full-black'>
          <div className='normal-width first-main'>
            <div className='text-block'>
              <h1 className='header-white-text'>Sometimes I want to&nbsp;🤯</h1>
              <p className='plain-text'>
                But my mother tells me nothing about dying from too many chicken
                sandwiches 🗿
              </p>
              <button className='button'>PUSH ME EEEy..</button>
            </div>
            <img
              width='220px'
              src='https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-3938023.jpg&fm=jpg'
              alt='Random'
            />
          </div>
        </div>

        <div className='normal-width second-main'>
          <h2 className='header-black-text'>
            Another strange text without meaning but with butter under the vest
          </h2>
          <div className='img-bar'>
            <ul>
              {/* Repeating blocks can be made more DRY, but for now, I'm keeping it as-is. */}
              {Array(4)
                .fill('')
                .map((_, idx) => (
                  <li key={idx}>
                    <img
                      width='220px'
                      src='https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?cs=srgb&dl=pexels-chokniti-khongchum-3938023.jpg&fm=jpg'
                      alt='Random'
                    />
                    <p>
                      {
                        [
                          "Yeah I want to do it more don't stop 👈(⌒▽⌒)👉",
                          'Touch me please today ＼(((￣(￣(￣▽￣)￣)￣)))／',
                          'But you are wrong young man you need to eat this dust! ○( ＾皿＾)っ Hehehe…',
                          'My pony is broken and I think I need to eat more of my pills :-O',
                        ][idx]
                      }
                    </p>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className='bg-full-gray'>
          <div className='normal-width gray-block'>
            <p className='quote-text'>
              My father feels strange and also he has a strange shape without
              glitching. Stop talking with me that way! (*/ω＼*)
            </p>
            <p className='quote-text-ps'>
              <strong>So lorem ipsum ℃</strong>
            </p>
          </div>
        </div>

        <div className='normal-width'>
          <div className='blue-block'>
            <div>
              <p className='plain-text'>
                <strong>way I&apos;m smaller but.. Ok, daddy :]</strong>
              </p>
              <p className='plain-text'>Ok call me daddy 👈(ﾟヮﾟ👈)</p>
            </div>
            <button className='button-blue plain-text'>
              I&apos;m a button without meaning
            </button>
          </div>
        </div>
      </div>

      <div className='bg-full-black'>
        <div className='normal-width footer'>
          <p className='plain-text'>Copyright © Niko 2022 o(*^▽^*)</p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
