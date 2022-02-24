import { combineReducers } from 'redux';
import { currentMovieReducer } from './currentMovie';
import { favoritesMoviesReducer } from './favoritesMovies';
import { moviesReducer } from './movies';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    currentMovie: currentMovieReducer,
    favoritesMovies: favoritesMoviesReducer
});

export type RootState = ReturnType<typeof rootReducer>;
