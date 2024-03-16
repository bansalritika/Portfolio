import Navbar from './components/Navbar';
import Home from './components/Home';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='body'>
    <Router>
      <Navbar />
      <Home />
      </Router>
      </div>
  );
}

export default App;
