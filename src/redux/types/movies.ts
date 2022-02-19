import { IMovie } from '../../types/types';

export interface MoviesState {
    items: IMovie[];
    loading: boolean;
    error: null | string;
    totalItems: string;
    pages: number;
    page: number;
}

export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCES = 'FETCH_SUCCESS',
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
    | FetchMoviesErrorAction
    | FetchPageAction;
