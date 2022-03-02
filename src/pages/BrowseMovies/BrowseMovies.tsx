import React, { FC, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './BrowseMovies.scss';
import SearchTerm from './components/SearchTerm/SearchTerm';
import { fetchMovies } from '../../redux/actions/movies'
import MoviesListBrowse from './components/MoviesList/BrowseMoviesList';

const BrowseMovies: FC = () => {

    const dispatch = useDispatch()
    const { items, totalItems, pages, page} = useTypedSelector(state => state.movies)
    const { quality, genre, rating, year, language, orderBy, value } = useTypedSelector(
        (state) => state.search,
    );
    useEffect(() => {
        dispatch(fetchMovies(page, value, quality, genre, rating, year, language, orderBy))
    }, [page])

    const movies = useMemo(() => items, [items])

    return (
        <div className="browse-movies">
                <SearchTerm />
                <MoviesListBrowse pages={pages} totalItems={totalItems} movies={movies} />
        </div>
    );
};

export default BrowseMovies;
