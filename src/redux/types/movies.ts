import { IMovie } from '../../types/types';

export interface MoviesState {
    items: IMovie[];
    popularMovies: IMovie[];
    lastMovies: IMovie[];
    loading: boolean;
    error: null | string;
    totalItems: string;
    pages: number;
    page: number;
}

export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCES = 'FETCH_SUCCESS',
    FETCH_POPULAR_MOVIES = 'FETCH_POPULAR_MOVIES',
    FETCH_LAST_MOVIES = 'FETCH_LAST_MOVIES',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
    FETCH_PAGE = 'FETCH_PAGE',
}

interface FetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCES;
    payload: {
        items: IMovie[];
        totalItems: number;
    };
}

interface FetchPopularMoviesAction {
    type: MoviesActionTypes.FETCH_POPULAR_MOVIES;
    payload: IMovie[];
}

interface FetchLastMoviesAction {
    type: MoviesActionTypes.FETCH_LAST_MOVIES,
    payload: IMovie[];
}

interface FetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}

interface FetchPageAction {
    type: MoviesActionTypes.FETCH_PAGE;
    payload: number | string;
}

export type MoviesAction =
    | FetchMoviesAction
    | FetchMoviesSuccessAction
    | FetchLastMoviesAction
    | FetchMoviesErrorAction
    | FetchPageAction
    | FetchPopularMoviesAction;
