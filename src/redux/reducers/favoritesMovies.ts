import { FavoritesMoviesAction, FavoritesMoviesState, FavoritesMoviesTypes } from '../types/favoritesMovies';

const initalState: FavoritesMoviesState = {
    favoritesMovies: [],
    loading: false,
    error: null,
};

export const favoritesMoviesReducer = (
    state = initalState,
    action: FavoritesMoviesAction,
): FavoritesMoviesState => {
    switch (action.type) {
        case FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES_SUCCES:
            return {
                ...state,
                loading: false,
                error: null,
                favoritesMovies: state.favoritesMovies
            }
        case FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case FavoritesMoviesTypes.FAVORITES_MOVIE_ADD:
            return {
                ...state,
                favoritesMovies: [...state.favoritesMovies, action.payload]
            }
        case FavoritesMoviesTypes.FAVORITES_MOVIE_DELETE:
            return {
                ...state,
                favoritesMovies: state.favoritesMovies.filter(movie => movie.id !== action.payload)
            }
        default:
            return state;
    }
};
