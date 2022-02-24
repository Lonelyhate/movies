import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MoviePage.scss';
import { AiOutlineDownload, AiFillStar } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { fetchCurrentMovie } from '../../redux/actions/currentMovie';
import { BiHeart } from 'react-icons/bi';
import imdbImg from '../../assets/images/imdb.svg';
import TechSpecs from './TechSpecs/TechSpecs';
import Loader from '../../shared/Loader/Loader';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import { IMovie } from '../../types/types';
import { addFavoritesMovie, deleteFromFavorites } from '../../redux/actions/favoritesMovies';
import cn from 'classnames'

const MoviePage = () => {
    const { movie, loading } = useTypedSelector((state) => state.currentMovie);
    const { favoritesMovies } = useTypedSelector((state) => state.favoritesMovies);
    const dispatch = useDispatch();
    let isCurrentMovie = localStorage.getItem('currentMovie');
    useEffect(() => {
        if (isCurrentMovie) {
            dispatch(fetchCurrentMovie(+isCurrentMovie));
        }
    }, []);

    const isFavorite = favoritesMovies.some((movieFav) => movieFav.id === movie?.id);

    const onClickFavorite = (movie: IMovie | null, id: number | undefined) => {
        if (isFavorite) {
            id && dispatch(deleteFromFavorites(id));
        } else {
            movie && dispatch(addFavoritesMovie(movie));
        }
    };

    const uploadData = movie?.date_uploaded.split(' ')[0];
    const uploadTime = movie?.date_uploaded.split(' ')[1];

    return (
        <div className="movie-page">
            <div className="container-page">
                {loading ? (
                    <div className="movie-page__loading">
                        <Loader />
                    </div>
                ) : (
                    <div className="movie-page__content">
                        <div className="movie-page__top">
                            <div className="movie-page__left">
                                <div className="movie-page__img">
                                    <img src={movie?.medium_cover_image} alt={movie?.title} />
                                    <div
                                        onClick={() => {
                                            onClickFavorite(movie, movie?.id);
                                        }}
                                        className={cn('movie-page__bookmark', {
                                            active: isFavorite
                                        })}>
                                        <FiBookmark />
                                    </div>
                                </div>
                                <a href={movie?.torrents[0].url} className="movie-page__download">
                                    <AiOutlineDownload /> Download
                                </a>
                            </div>
                            <div className="movie-page__right">
                                <h2 className="movie-page__title">{movie?.title}</h2>
                                <span className="movie-page__year">{movie?.year}</span>
                                {movie?.genres && (
                                    <ul className="movie-page__genres">
                                        {movie.genres.map((genre, index) => (
                                            <li key={index} className="movie-page__genre">
                                                {genre} {index + 1 !== movie.genres.length && '/ '}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <div className="movie-page__availables">
                                    <ul className="movie-page__availables-list">
                                        <li className="movie-page__av-in">Available in:</li>
                                        {movie?.torrents.map((torrent, index) => (
                                            <li key={index} className="movie-page__available">
                                                <a
                                                    href={
                                                        torrent.url
                                                    }>{`${torrent.quality}.${torrent.type}`}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="movie-page__about">
                                    <BiHeart /> <span>{movie?.like_count}</span>
                                </div>
                                <div className="movie-page__about">
                                    <img src={imdbImg} alt={'img'} />{' '}
                                    <span>{movie?.rating} / 10</span>
                                    <AiFillStar />
                                </div>
                            </div>
                            <SimilarMovies />
                        </div>
                        <div className="movie-page__description">
                            <h4 className="movie-page__descr-title">Synopsis</h4>
                            <p className="movie-page__text">{movie?.description_full}</p>
                            <p className="movie-page__uploaded">
                                Uploaded: <br /> {uploadData} at {uploadTime}{' '}
                            </p>
                        </div>
                        {movie?.torrents && <TechSpecs specs={movie?.torrents} />}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MoviePage;
