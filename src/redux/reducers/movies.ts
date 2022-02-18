import { MoviesAction, MoviesActionTypes, SearchState } from '../types/movies';

const initalState: SearchState = {
    items: [],
    loading: false,
    error: null,
    totalItems: '0',
    pages: 0
};

const numberParse = (num: number) => {
    let result = String(num).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
    return result;
};

export const moviesReducer = (state = initalState, action: MoviesAction): SearchState => {
    switch (action.type) {
        case MoviesActionTypes.FETCH_MOVIES:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case MoviesActionTypes.FETCH_MOVIES_SUCCES:
            return {
                ...state,
                loading: false,
                items: action.payload.items,
                totalItems: numberParse(action.payload.totalItems),
                pages: Math.round(+action.payload.totalItems / 20),
            };
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
