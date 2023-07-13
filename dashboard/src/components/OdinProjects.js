import React from 'react';
import './OdinProjects.css';

const OdinProjects = () => {
  return (
    <main>
      <section>
        <h1>Odin Projects</h1>
        <div className='project-list'>
          <div className='project'>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/sign-up-form/index.html'>
                Sign Up Form
              </a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/calculator/index.html'>Calculator</a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/etch-a-sketch/index.html'>
                Etch a Sketch
              </a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/javascript-drum-kit/index-START.html'>
                Drum Kit
              </a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/rock-paper-scissors/index.html'>RPS</a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/odin-recipes/index.html'>Recipes</a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/restaurant-landing/index.html'>
                Restaurant Landing
              </a>
            </div>
            <div className='sub-project'>
              <a href='/JSt-For-Fun/odin/landing-ex/index.html'>Landing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OdinProjects;
