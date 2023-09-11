import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/Restaurant' element={<Restaurant />} />
        <Route path='/ToDoApp' element={<ToDoApp />} />
        <Route path='/TicTacToe' element={<TicTacToe />} />
        <Route path='/BookLibrary' element={<BookLibrary />} />
        <Route path='/SignUpForm' element={<SignUpForm />} />
        <Route path='/Calculator' element={<Calculator />} />
        <Route path='/EtchASketch' element={<EtchASketch />} />
        <Route path='/DrumKit' element={<DrumKit />} />
        <Route path='/Landing' element={<Landing />} />
        <Route path='/DashLanding' element={<DashLanding />} />
        <Route path='/RockPaperScissors' element={<RockPaperScissors />} />
        <Route path='/OdinRecipes' element={<OdinRecipes />} />
      </Routes>
    </Router>
  );
}

export default App;
