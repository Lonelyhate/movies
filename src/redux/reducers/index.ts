import { combineReducers } from 'redux';
import { moviesReducer } from './movies';
import { searchReducer } from './search';

export const rootReducer = combineReducers({
    movies: moviesReducer,
    search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
