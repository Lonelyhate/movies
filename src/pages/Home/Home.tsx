import axios from 'axios';
import React, { useEffect } from 'react';
import './Home.scss';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { fetchLastMovies, fetchPopularMovies } from '../../redux/actions/movies';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MoviesList from '../components/MovesList/MoviesList';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPopularMovies());
        dispatch(fetchLastMovies());
    }, []);
    
    const { popularMovies, lastMovies } = useTypedSelector((state) => state.movies);

    return (
        <div className="home-page">
            <div className="container-page">
                <h1 className="home-page__title">Download movies: HD smallest size</h1>
                <p className="home-page__text">
                    Welcome to the official website. Here you can browse and download YIFY movies in
                    excellent 720p, 1080p, 2160p 4K and 3D quality, all at the smallest file size.
                    YTS Movies Torrents.
                </p>
                <h3 className="home-page__subtitle">
                    <AiFillStar /> <span>Popular Downloads</span>
                </h3>
                <MoviesList movies={popularMovies} />
            </div>
            <div className="home-page__latest">
                <div className="container-page">
                    <h3 className="home-page__subtitle-low">Latest YIFY Movies Torrents</h3>
                    <MoviesList movies={lastMovies} />
                </div>
            </div>
        </div>
    );
};

export default Home;
