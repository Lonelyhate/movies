import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { activePage, fetchMovies } from '../../../../redux/actions/movies';
import { IMovie } from '../../../../types/types';
import MovieItem from '../MovieItem/MovieItem';
import Pagination from '../Pagination/Pagination';
import './MoviesList.scss';

interface MoviesListProps {
    movies: IMovie[];
    totalItems: string;
    pages: number;
}

const MoviesList: FC<MoviesListProps> = ({ movies, totalItems, pages }) => {
    const dispatch = useDispatch();
    const { page } = useTypedSelector((state) => state.movies);
    const { value, quality, genre, rating, year, language, orderBy } = useTypedSelector(
        (state) => state.search,
    );

    const pagination: any[] = [];

    for (let i = 0; pages < 8 ? i < pages : i < pages; i++) {
        if (page < 8) {
            if (i < 8) {
                pagination.push(i + 1);
            }
            continue;
        } else if (page > 7) {
            if (i > page - 5 && i < page + 3) {
                pagination.push(i + 1);
            }
            continue;
        }
        break;
    }

    const onClickPage = (page: string | number) => {
        dispatch(activePage(page));
        dispatch(fetchMovies(+page, value, quality, genre, rating, year, language, orderBy));
    };

    return (
        <section className="movies-list__content">
            <div className="container-page">
                <h2 className="movies-list__title">
                    {totalItems} <span>Movies found</span>
                </h2>
                <Pagination
                    totalPages={pages}
                    activePage={page}
                    onClick={onClickPage}
                    buttons={pagination}
                />
                <ul className="movies-list">
                    {movies &&
                        movies.map((movie) => (
                            <li key={movie.id} className="movies-list__item">
                                <MovieItem movie={movie} />
                            </li>
                        ))}
                </ul>
                <Pagination
                    totalPages={pages}
                    activePage={page}
                    onClick={onClickPage}
                    buttons={pagination}
                />
            </div>
        </section>
    );
};

export default MoviesList;
