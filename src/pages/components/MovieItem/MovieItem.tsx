import React, { FC } from 'react';
import { IMovie } from '../../../types/types';
import { AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './MovieItem.scss';
import { useDispatch } from 'react-redux';
import { fetchCurrentMovie } from '../../../redux/actions/currentMovie';
import { FiBookmark } from 'react-icons/fi';
import { addFavoritesMovie, deleteFromFavorites } from '../../../redux/actions/favoritesMovies';
import { useTypedSelector } from '../../../hooks/useTypedSelector';
import cn from 'classnames';

interface MovieItemProps {
    movie: IMovie;
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { favoritesMovies } = useTypedSelector((state) => state.favoritesMovies);

    const onClickMovie = (id: number) => {
        navigate(`/${movie.title}`);
        dispatch(fetchCurrentMovie(id));
        localStorage.setItem('currentMovie', id + '');
    };

    const isFavorite = favoritesMovies.some((movieFavorite) => movieFavorite.id === movie.id);

    const onClickFavorites = (movie: IMovie, id: number) => {
        if (isFavorite) {
            dispatch(deleteFromFavorites(id));
        } else {
            dispatch(addFavoritesMovie(movie));
        }
    };

    return (
        <article className="movie-item">
            <div className="movie-item__img">
                <img src={movie.medium_cover_image} alt={movie.title} />
                <div className="movie-item__content">
                    <div
                        onClick={() => {
                            onClickFavorites(movie, movie.id);
                        }}
                        className={cn('movie-item__bookmark', {
                            active: isFavorite
                        })}>
                        <FiBookmark />
                    </div>
                    <AiFillStar />
                    {movie.rating > 0 && (
                        <h4 className="movie-item__rating">{movie.rating} / 10</h4>
                    )}
                    {movie.genres &&
                        movie.genres.map(
                            (genre, index) =>
                                index < 2 && (
                                    <h4 key={index} className="movie-item__genre">
                                        {genre}
                                    </h4>
                                ),
                        )}
                    <button
                        onClick={() => {
                            onClickMovie(movie.id);
                        }}>
                        View Details
                    </button>
                </div>
            </div>
            <button
                onClick={() => {
                    onClickMovie(movie.id);
                }}>
                {movie.title.length > 19 ? movie.title.slice(0, 20) + ' ...' : movie.title}
            </button>
            <span className="movie-item__year">{movie.year}</span>
        </article>
    );
};

export default React.memo(MovieItem);
