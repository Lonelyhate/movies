import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './BrowseMovies.scss';
import SearchTerm from './components/SearchTerm/SearchTerm';
import { fetchMovies } from '../../redux/actions/movies'
import MoviesList from './components/MoviesList/MoviesList';

const BrowseMovies: FC = () => {

    const dispatch = useDispatch()
    const { items, totalItems, pages } = useTypedSelector(state => state.movies)
    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const pagesNumber = []

    console.log(pages)

    return (
        <div className="browse-movies">
                <SearchTerm />
                <MoviesList totalItems={totalItems} movies={items} />
        </div>
    );
};

export default BrowseMovies;
