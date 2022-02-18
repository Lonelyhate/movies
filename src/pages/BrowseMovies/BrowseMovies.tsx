import React, { FC } from 'react';
import './BrowseMovies.scss';
import SearchTerm from './components/SearchTerm/SearchTerm';

const BrowseMovies: FC = () => {
    
    return (
        <div className="browse-movies">
                <SearchTerm />
        </div>
    );
};

export default BrowseMovies;
