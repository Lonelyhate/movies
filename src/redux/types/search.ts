export interface SearchState {
    quality: string;
    genre: string;
    rating: string | number;
    year: string;
    language: string;
    orderBy: string;
    value: string
}

export enum SearchActionTypes {
    SET_QUALITY = 'SET_QUALITY',
    SET_GENRE = 'SET_GENRE',
    SET_RATING = 'SET_RATING',
    SET_YEAR = 'SET_YEAR',
    SET_LANGUAGE = 'SET_LANGUAGE',
    SET_ORDER_BY = 'SET_ORDER_BY',
    SET_VALUE = 'SET_VALUE'
}

interface SetQualityAction {
    type: SearchActionTypes.SET_QUALITY;
    payload: string;
}

interface SetGenreAction {
    type: SearchActionTypes.SET_GENRE;
    payload: string;
}

interface SetRatingAction {
    type: SearchActionTypes.SET_RATING;
    payload: string | number;
}

interface SetYearAction {
    type: SearchActionTypes.SET_YEAR;
    payload: string;
}

interface SetLanguageAction {
    type: SearchActionTypes.SET_LANGUAGE;
    payload: string;
}

interface SetOrderByAction {
    type: SearchActionTypes.SET_ORDER_BY;
    payload: string;
}

interface SetValueAction {
    type: SearchActionTypes.SET_VALUE,
    payload: string
}

export type SeatchAction =
    | SetQualityAction
    | SetGenreAction
    | SetRatingAction
    | SetYearAction
    | SetLanguageAction
    | SetOrderByAction
    | SetValueAction
