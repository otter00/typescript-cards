import React from 'react';
import HeaderComponent from './components/Header/HeaderComponent';
import HomeComponent from './components/HomePageComponent/HomeComponent';
import HomePageStyles from './components/HomePageComponent/HomePageStyle.module.scss';
import ContextProvider from './context/ContextProvider';
import TemplateTableStyles from './components/TemplateTable/TemplateTable.module.scss';
import TableWordsComponent from './components/TableWordsComponent/TableWordsComponent';
import CardSlider from './components/CardSlider/CardSlider'
import AddStringRow from './components/AddStringRow/AddStringRow'
import { WordsContext } from './context/ContextProvider';


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
          <Route path="/table" element={<TableWordsList />} />
          {/* <Route path="/learn" element={<Learn />} /> */}
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

// function Learn() {
//   return <CardSlider />;
// }

function HomePage() {
  return <HomeComponent />
}

function TableWordsList() {

  return (
    <>
  <AddStringRow />
  <table className={TemplateTableStyles.table}>
  <thead className={TemplateTableStyles.thead}>
    <tr>
    <th>Level</th>
    <th>English</th>
    <th>Transcription</th>
    <th>Russian</th>
    <th>Options</th>
    </tr>
  </thead>
  <TableWordsComponent />
</table>
</>
  )
}

export default App;
