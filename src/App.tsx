import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BrowseMovies from './pages/BrowseMovies/BrowseMovies';
import Header from './shared/Header/Header';

function App() {
    
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path='browse-movies' element={<BrowseMovies/>} />
      </Routes>
    </div>
  );
}

export default App;
