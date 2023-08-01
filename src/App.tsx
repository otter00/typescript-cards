import React from 'react';
import './App.scss';
import HeaderComponent from './components/Header/HeaderComponent';
import HomeComponent from './components//HomePageComponent/HomeComponent';
import HomePageStyles from './components/HomePageComponent/HomePageStyle.module.scss';
import { ContextProvider } from './context/ContextProvider';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <ContextProvider>
    <Router>
      <div className='body'>
        <HeaderComponent />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Router>
    </ContextProvider>
  );
}

function NoMatch() {
  return (
    <a href="https://pets.byspotify.com/404">
      <h1 className={HomePageStyles.nofound}>No match, unfortunately...</h1>
    </a>
  );
}

function HomePage() {
  return <HomeComponent />
}

export default App;
