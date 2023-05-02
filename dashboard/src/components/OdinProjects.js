import React from 'react';
import './OdinProjects.css';

const OdinProjects = () => {
  return (
    <main>
      <section>
        <h1>Odin Projects</h1>
        <div className="project-list">
          <div className="project">
            <div className="sub-project">
              <a href="/odin/calculator">Calculator</a>
            </div>
            <div className="sub-project">
              <a href="/odin/etch-a-sketch">Etch a Sketch</a>
            </div>
            <div className="sub-project">
              <a href="/odin/drum-kit">Drum Kit</a>
            </div>
            <div className="sub-project">
              <a href="/odin/rock-paper-scissors">RPS</a>
            </div>
            <div className="sub-project">
              <a href="/odin/recipes">Recipes</a>
            </div>
            <div className="sub-project">
              <a href="/odin/landing-ex">Landing</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OdinProjects;
