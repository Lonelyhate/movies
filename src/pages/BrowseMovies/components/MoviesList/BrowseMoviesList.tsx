import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { activePage, fetchMovies } from '../../../../redux/actions/movies';
import Loader from '../../../../shared/Loader/Loader';
import { IMovie } from '../../../../types/types';
import MoviesList from '../../../components/MovesList/MoviesList';
import Pagination from '../Pagination/Pagination';
import './BrowseMoviesList.scss';

interface MoviesListProps {
    totalItems: string;
    pages: number;
    movies: IMovie[];
}

const BrowseMoviesList: FC<MoviesListProps> = ({ totalItems, pages, movies }) => {
    const dispatch = useDispatch();
    const { page, loading } = useTypedSelector((state) => state.movies);
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
        <section className="browse-movies-list__content">
            <div className="container-page">
                <h2 className="browse-movies-list__title">
                    {totalItems} <span>Movies found</span>
                </h2>
                {pages > 1 && (
                    <Pagination
                        totalPages={pages}
                        activePage={page}
                        onClick={onClickPage}
                        buttons={pagination}
                    />
                )}
                {loading ? (
                    <Loader />
                ) : (
                    <>
                        <MoviesList movies={movies} />
                        {pages > 1 && (
                            <Pagination
                                totalPages={pages}
                                activePage={page}
                                onClick={onClickPage}
                                buttons={pagination}
                            />
                        )}
                    </>
                )}
            </div>
        </section>
    );
};

export default BrowseMoviesList;
