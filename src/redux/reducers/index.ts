import { combineReducers } from 'redux';
import { currentMovieReducer } from './currentMovie';
import { moviesReducer } from './movies';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer,
    currentMovie: currentMovieReducer
});

export type RootState = ReturnType<typeof rootReducer>;
