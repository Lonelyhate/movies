import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BrowseMovies from './pages/BrowseMovies/BrowseMovies';
import Home from './pages/Home/Home';
import MoviePage from './pages/MoviePage/MoviePage';
import Header from './shared/Header/Header';

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="browse-movies" element={<BrowseMovies />} />
                <Route path="/:title" element={<MoviePage />} />
            </Routes>
        </div>
    );
}

export default App;
