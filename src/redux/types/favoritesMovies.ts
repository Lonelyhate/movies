import { IMovie } from '../../types/types';

export interface FavoritesMoviesState {
    favoritesMovies: IMovie[];
    loading: boolean;
    error: string | null;
}

export enum FavoritesMoviesTypes {
    FETCH_FAVORITES_MOVIES = '',
    FETCH_FAVORITES_MOVIES_SUCCES = 'FETCH_FAVORITES_MOVIES_SUCCES',
    FETCH_FAVORITES_MOVIES_ERROR = 'FETCH_FAVORITES_MOVIES_ERROR',
    FAVORITES_MOVIE_ADD = 'FAVORITES_MOVIE_ADD',
    FAVORITES_MOVIE_DELETE = 'FAVORITES_MOVIE_DELETE',
}

interface FetchFavoritesMoviesAction {
    type: FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES;
}

interface FetchFavoritesMoviesSuccessAction {
    type: FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES_SUCCES;
    // payload: IMovie[];
}

interface FetchFavoritesMoviesErrorAction {
    type: FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES_ERROR;
    payload: string;
}

interface FetchFavoritesMoviesAddAction {
    type: FavoritesMoviesTypes.FAVORITES_MOVIE_ADD;
    payload: IMovie;
}

interface FetchFavoritesMoviesDeleteAction {
    type: FavoritesMoviesTypes.FAVORITES_MOVIE_DELETE;
    payload: number;
}

export type FavoritesMoviesAction =
    | FetchFavoritesMoviesAction
    | FetchFavoritesMoviesSuccessAction
    | FetchFavoritesMoviesErrorAction
    | FetchFavoritesMoviesAddAction
    | FetchFavoritesMoviesDeleteAction;
