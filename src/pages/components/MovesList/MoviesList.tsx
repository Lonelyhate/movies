import React, { FC } from 'react';
import { IMovie } from '../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';

interface MoviesListProps {
    movies: IMovie[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
    return (
        <ul className="movies-list">
            {movies &&
                movies.map((movie) => (
                    <li key={movie.id} className="movies-list__item">
                        <MovieItem movie={movie} />
                    </li>
                ))}
        </ul>
    );
};

export default MoviesList;
