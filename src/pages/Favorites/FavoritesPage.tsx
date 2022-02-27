import React, { FC } from 'react';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import MoviesList from '../components/MovesList/MoviesList';
import './FavoritesPage.scss';

const FavoritesPage: FC = () => {
    const { favoritesMovies } = useTypedSelector((state) => state.favoritesMovies);

    return (
        <div className="favorites-page">
            <div className="container-page">
                <h3 className="favorites-page__title">
                    {favoritesMovies.length
                        ? 'Your favorities movies'
                        : 'You dont have favorite movies'}
                </h3>
                <MoviesList movies={favoritesMovies} />
            </div>
        </div>
    );
};

export default FavoritesPage;
