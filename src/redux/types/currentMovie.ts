import { IMovie } from '../../types/types';

export interface CurrentMovieState {
    movie: IMovie | null;
    loading: boolean;
    error: string | null;
}

export enum CurrentMovieActionTypes {
    FETCH_MOVIE = 'FETCH_MOVIE',
    FETCH_MOVIE_SUCCES = 'FETCH_MOVIE_SUCCES',
    FETCH_MOVIE_ERROR = 'FETCH_MOVIE_ERROR',
}

interface FetchCurrentMovieAction {
    type: CurrentMovieActionTypes.FETCH_MOVIE;
}

interface FetchCurrentMovieSuccessAction {
    type: CurrentMovieActionTypes.FETCH_MOVIE_SUCCES;
    payload: IMovie;
}

interface FetchCurrentMovieErrorAction {
    type: CurrentMovieActionTypes.FETCH_MOVIE_ERROR;
    payload: string;
}

export type CurrentMovieAction =
    | FetchCurrentMovieAction
    | FetchCurrentMovieSuccessAction
    | FetchCurrentMovieErrorAction;
