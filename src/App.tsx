import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import Restaurant from './components/RestaurantPages/Restaurant';
import ToDoApp from './components/ToDoApp/ToDoApp';
import TicTacToe from './components/TicTacToe/TicTacToe';
import BookLibrary from './components/BookLibrary/BookLibrary';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Calculator from './components/Calculator/Calculator';
import EtchASketch from './components/EtchASketch/EtchASketch';
import DrumKit from './components/DrumKit/DrumKit';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';
import OdinRecipes from './components/OdinRecipes/OdinRecipes';
import Landing from './components/Landing/Landing';
import DashLanding from './components/DashLanding/DashLanding';
import WeatherApp from './components/WeatherApp/WeatherApp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/restaurant' element={<Restaurant />} />
        <Route path='/to-do-app' element={<ToDoApp />} />
        <Route path='/tic-tac-toe' element={<TicTacToe />} />
        <Route path='/book-library' element={<BookLibrary />} />
        <Route path='/sign-up-form' element={<SignUpForm />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/etch-a-sketch' element={<EtchASketch />} />
        <Route path='/drum-kit' element={<DrumKit />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='/dash-landing' element={<DashLanding />} />
        <Route path='/rock-paper-scissors' element={<RockPaperScissors />} />
        <Route path='/odin-recipes' element={<OdinRecipes />} />
        <Route path='/weather-app' element={<WeatherApp />} />
      </Routes>
    </Router>
  );
}

export default App;
