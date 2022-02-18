import { MoviesAction, MoviesActionTypes, SearchState } from "../types/movies";

const initalState: SearchState = {
    items: [],
    loading: false,
    error: null,
    totalItems: 0
}

export const moviesReducer = (state = initalState, action: MoviesAction): SearchState => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_MOVIES:
            return {
                ...state,
                loading: true,
                error: null
            }
        case MoviesActionTypes.FETCH_MOVIES_SUCCES:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
                totalItems: action.payload.totalItems
            }
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}