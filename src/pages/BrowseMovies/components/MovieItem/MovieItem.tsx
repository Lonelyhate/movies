import React, { FC } from 'react';
import { IMovie } from '../../../../types/types';
import { AiFillStar } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import './MovieItem.scss';
import { useDispatch } from 'react-redux';
import { fetchCurrentMovie } from '../../../../redux/actions/currentMovie';

interface MovieItemProps {
    movie: IMovie;
}

const MovieItem: FC<MovieItemProps> = ({ movie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onClickMovie = (id: number) => {
        navigate(`/${movie.title}`);
        dispatch(fetchCurrentMovie(id));
        localStorage.setItem('currentMovie', id + '');
    };

    return (
        <article className="movie-item">
            <div className="movie-item__img">
                <img src={movie.medium_cover_image} alt={movie.title} />
                <div className="movie-item__content">
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
                {movie.title}
            </button>
            <span className="movie-item__year">{movie.year}</span>
        </article>
    );
};

export default React.memo(MovieItem);
