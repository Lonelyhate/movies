import { CurrentMovieAction, CurrentMovieActionTypes, CurrentMovieState } from "../types/currentMovie";

const initialState: CurrentMovieState = {
    movie: null,
    loading: false,
    error: null
}

export const currentMovieReducer = (state = initialState, action: CurrentMovieAction): CurrentMovieState => {
    switch (action.type) {
        case CurrentMovieActionTypes.FETCH_MOVIE:
            return {
                ...state,
                loading: true
            }
        case CurrentMovieActionTypes.FETCH_MOVIE_SUCCES:
            return {
                ...state,
                loading: false,
                movie: action.payload
            }
        case CurrentMovieActionTypes.FETCH_MOVIE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}