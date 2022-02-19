import { MoviesAction, MoviesActionTypes, MoviesState } from '../types/movies';

const initalState: MoviesState = {
    items: [],
    loading: false,
    error: null,
    totalItems: '0',
    pages: 0,
    page: 1,
};

const numberParse = (num: number) => {
    let result = String(num).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1,');
    return result;
};

export const moviesReducer = (state = initalState, action: MoviesAction): MoviesState => {
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
                pages: Math.ceil(+action.payload.totalItems / 20),
            };
        case MoviesActionTypes.FETCH_MOVIES_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case MoviesActionTypes.FETCH_PAGE:
            let page =
                action.payload === '<< First'
                    ? 1
                    : action.payload === '<< Previous'
                    ? state.page - 1
                    : action.payload === 'Next >>'
                    ? state.page + 1
                    : action.payload === 'Last >>'
                    ? (state.page = state.pages)
                    : +action.payload;
            return {
                ...state,
                page: page,
            };
        default:
            return state;
    }
};
