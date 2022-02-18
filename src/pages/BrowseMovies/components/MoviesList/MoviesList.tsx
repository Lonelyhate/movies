import React, { FC } from 'react';
import { IMovie } from '../../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import './MoviesList.scss';

interface MoviesListProps {
    movies: IMovie[];
    totalItems: string
}

const MoviesList: FC<MoviesListProps> = ({ movies, totalItems }) => {

    return (
        <section className="movies-list__content">
            <div className="container-page">
                <h2 className='movies-list__title'>{totalItems} <span>Movies found</span></h2>
                <ul className="movies-list">
                    {movies.map((movie) => (
                        <li key={movie.id} className="movies-list__item">
                            <MovieItem movie={movie} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default MoviesList;
