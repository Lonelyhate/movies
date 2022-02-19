import React, { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './BrowseMovies.scss';
import SearchTerm from './components/SearchTerm/SearchTerm';
import { fetchMovies } from '../../redux/actions/movies'
import MoviesList from './components/MoviesList/MoviesList';

const BrowseMovies: FC = () => {

    const dispatch = useDispatch()
    const { items, totalItems, pages, page} = useTypedSelector(state => state.movies)
    const { quality, genre, rating, year, language, orderBy, value } = useTypedSelector(
        (state) => state.search,
    );
    useEffect(() => {
        dispatch(fetchMovies(page, value, quality, genre, rating, year, language, orderBy))
    }, [page])

    return (
        <div className="browse-movies">
                <SearchTerm />
                <MoviesList pages={pages} totalItems={totalItems} movies={items} />
        </div>
    );
};

export default BrowseMovies;
