import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OdinProjects from './components/OdinProjects';
import Restaurant from './components/Restaurant/Restaurant';
import ToDoApp from './components/ToDoApp/ToDoApp';
import TicTacToe from './components/TicTacToe/TicTacToe';
import BookLibrary from './components/BookLibrary/BookLibrary';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Calculator from './components/Calculator/Calculator';
import EtchASketch from './components/EtchASketch/EtchASketch';
import DrumKit from './components/DrumKit/DrumKit';
import RockPaperScissors from './components/RockPaperScissors/RockPaperScissors';
// import Recipes from './components/OdinRecipes';
// import Landing from './components/Landing';


function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<OdinProjects />} />
          <Route path='/Restaurant' element={<Restaurant />} />
          <Route path='/ToDoApp' element={<ToDoApp />} />
          <Route path='/TicTacToe' element={<TicTacToe />} />
          <Route path='/BookLibrary' element={<BookLibrary />} />
          <Route path='/SignUpForm' element={<SignUpForm />} />
          <Route path='/Calculator' element={<Calculator />} />
          <Route path='/EtchASketch' element={<EtchASketch />} />
          <Route path='/DrumKit' element={<DrumKit />} />
          <Route path='/RockPaperScissors' element={<RockPaperScissors />} />
          {/* <Route path='/recipes' element={<Recipes />} />
          <Route path='/landing' element={<Landing />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
