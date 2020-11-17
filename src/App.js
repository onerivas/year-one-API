import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Axios from 'axios';
import Nav from './components/nav.js';
import Home from './components/home.js';
import MovieSearch from './components/search.js';

function App() {
  return (
    <Router>
      <div className='container'>
        <Nav />
        <Route path='/' component={ Home } />
      </div>
    </Router>
  );
}

export default App;
