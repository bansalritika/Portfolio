import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    
    <Router>
      <div className='body'>
      <Navbar />
      <Home />
      </div>
      </Router>
     
  );
}

export default App;
