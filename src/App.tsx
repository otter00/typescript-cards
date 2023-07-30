import React from 'react';
import './App.scss';
import HeaderComponent from './components/Header/HeaderComponent';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='body'>
        <HeaderComponent />
        <Routes></Routes>
      </div>
    </Router>
  );
}

export default App;
