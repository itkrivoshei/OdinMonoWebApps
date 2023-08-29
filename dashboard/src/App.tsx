import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OdinProjects from './components/OdinProjects';
import Restaurant from './components/Restaurant/Restaurant';
import TodoApp from './components/ToDoApp/TodoApp';

function App() {
  return (
    <div className='App'>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path='/' element={<OdinProjects />} />
          <Route path='/restaurant' element={<Restaurant />} />
          <Route path='/ToDoApp' element={<TodoApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
