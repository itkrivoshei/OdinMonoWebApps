import React from 'react';
import { Link } from 'react-router-dom';
import './OdinProjects.scss';

const OdinProjects = () => {
  return (
    <main>
      <section>
        <h1>Odin Projects</h1>
        <div className='project-list'>
          <div className='project'>
            <div className='sub-project'>
              <Link to='/toDoApp'>ToDo App</Link>
            </div>
            <div className='sub-project'>
              <Link to='/ticTacToe'>Tic Tac Toe</Link>
            </div>
            <div className='sub-project'>
              <Link to='/bookLibrary'>Book Library</Link>
            </div>
            <div className='sub-project'>
              <Link to='/signUpForm'>Sign Up Form</Link>
            </div>
            <div className='sub-project'>
              <Link to='/dashBoardLanding'>Dash Board Landing</Link>
            </div>
            <div className='sub-project'>
              <Link to='/calculator'>Calculator</Link>
            </div>
            <div className='sub-project'>
              <Link to='/etchASketch'>Etch a Sketch</Link>
            </div>
            <div className='sub-project'>
              <Link to='/drumKit'>Drum Kit</Link>
            </div>
            <div className='sub-project'>
              <Link to='/rockPaperScissors'>Rock Paper Scissors</Link>
            </div>
            <div className='sub-project'>
              <Link to='/recipes'>Recipes</Link>
            </div>
            <div className='sub-project'>
              <Link to='/restaurant'>Restaurant Landing React Route</Link>
            </div>
            <div className='sub-project'>
              <Link to='/landing'>Landing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OdinProjects;
