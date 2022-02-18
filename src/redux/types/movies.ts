
export interface SearchState {
    items: any[];
    loading: boolean;
    error: null | string;
    totalItems: number;
}

export enum MoviesActionTypes {
    FETCH_MOVIES = 'FETCH_MOVIES',
    FETCH_MOVIES_SUCCES = 'FETCH_SUCCESS',
    FETCH_MOVIES_ERROR = 'FETCH_MOVIES_ERROR',
}

interface FetchMoviesAction {
    type: MoviesActionTypes.FETCH_MOVIES;
}

interface FetchMoviesSuccessAction {
    type: MoviesActionTypes.FETCH_MOVIES_SUCCES;
    payload: {
        items: any[];
        totalItems: number;
    };
}

interface FetchMoviesErrorAction {
    type: MoviesActionTypes.FETCH_MOVIES_ERROR;
    payload: string;
}

export type MoviesAction = FetchMoviesAction | FetchMoviesSuccessAction | FetchMoviesErrorAction;
