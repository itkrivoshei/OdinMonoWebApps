import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.scss';

const Dashboard = () => {
  return (
    <main>
      <section className='dashboard-container'>
        <h1>Odin Projects</h1>
        <div className='project-list'>
          <div className='project'>
            <div className='sub-project'>
              <Link to='/ToDoApp'>To Do</Link>
            </div>
            <div className='sub-project'>
              <Link to='/TicTacToe'>Tic Tac Toe</Link>
            </div>
            <div className='sub-project'>
              <Link to='/BookLibrary'>Book Library</Link>
            </div>
            <div className='sub-project'>
              <Link to='/SignUpForm'>Sign Up Form</Link>
            </div>
            <div className='sub-project'>
              <Link to='/Calculator'>Calculator</Link>
            </div>
            <div className='sub-project'>
              <Link to='/EtchASketch'>Etch a Sketch</Link>
            </div>
            <div className='sub-project'>
              <Link to='/DrumKit'>Drum Kit</Link>
            </div>
            <div className='sub-project'>
              <Link to='/RockPaperScissors'>Rock Paper Scissors</Link>
            </div>
            <div className='sub-project'>
              <Link to='/DashLanding'>Simple Dashboard Landing</Link>
            </div>
            <div className='sub-project'>
              <Link to='/Restaurant'>Restaurant Landing Pages</Link>
            </div>
            <div className='sub-project'>
              <Link to='/OdinRecipes'>Recipes Pages</Link>
            </div>
            <div className='sub-project'>
              <Link to='/Landing'>First Odin Landing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
