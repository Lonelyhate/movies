import React, { useEffect } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './MoviePage.scss';
import { AiOutlineDownload } from 'react-icons/ai';
import { FiBookmark } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { fetchCurrentMovie } from '../../redux/actions/currentMovie';
import { BiHeart } from 'react-icons/bi';
import imdbImg from '../../assets/images/imdb.svg'

const MoviePage = () => {
    const { movie } = useTypedSelector((state) => state.currentMovie);
    const dispatch = useDispatch();
    let isCurrentMovie = localStorage.getItem('currentMovie');
    useEffect(() => {
        if (isCurrentMovie) {
            dispatch(fetchCurrentMovie(+isCurrentMovie));
        }
    }, []);

    return (
        <div className="movie-page">
            <div className="container-page">
                <div className="movie-page__content">
                    <div className="movie-page__left">
                        <div className="movie-page__img">
                            <img src={movie?.medium_cover_image} alt={movie?.title} />
                            <FiBookmark />
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
                                        {genre} {index + 1 !== movie.genres.length && '/'}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="movie-page__availables">
                            <ul className="movie-page__availables-list">
                                <li className='movie-page__av-in' >Available in:</li>
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
                            <BiHeart/> <span>{movie?.like_count}</span>
                        </div>
                        <div className="movie-page__about">
                            <img src={imdbImg} alt={'img'} /> <span>{movie?.rating} / 10</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
