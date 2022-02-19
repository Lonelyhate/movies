import { GenreChangeValue, LanguageChangeValue, OrderByValue, QualityChangeValue, RatingChangeValue, YearChangeValue } from "../../types/types";
import { SearchActionTypes, SearchState, SeatchAction } from "../types/search";

const initialState: SearchState = {
    quality: QualityChangeValue.ALL,
    genre: GenreChangeValue.ALL,
    rating: RatingChangeValue.ALL,
    year: YearChangeValue.ALL,
    language: LanguageChangeValue.ALL,
    orderBy: OrderByValue.LATEST,
    value: ''
}

export const searchReducer = (state = initialState, action: SeatchAction): SearchState => {
    switch (action.type) {
        case SearchActionTypes.SET_QUALITY:
            return {
                ...state,
                quality: action.payload
            }
        case SearchActionTypes.SET_GENRE:
            return {
                ...state,
                genre: action.payload
            }
        case SearchActionTypes.SET_RATING:
            return {
                ...state,
                rating: action.payload
            }
        case SearchActionTypes.SET_YEAR:
            return {
                ...state,
                year: action.payload
            }
        case SearchActionTypes.SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }
        case SearchActionTypes.SET_ORDER_BY:
            return {
                ...state,
                orderBy: action.payload
            }
        case SearchActionTypes.SET_VALUE:
            return {
                ...state,
                value: action.payload
            }
        default:
            return state
    }
}