import { Dispatch } from 'react';
import { SearchActionTypes, SeatchAction } from '../types/search';

export const setQuality = (quality: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_QUALITY,
            payload: quality,
        });
    };
};

export const setGenre = (genre: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_GENRE,
            payload: genre,
        });
    };
};

export const setRating = (rating: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_RATING,
            payload: rating,
        });
    };
};

export const setYear = (year: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_YEAR,
            payload: year,
        });
    };
};

export const setLanguage = (language: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_LANGUAGE,
            payload: language,
        });
    };
};

export const setOrderBy = (orderBy: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_ORDER_BY,
            payload: orderBy,
        });
    };
};

export const setValue = (value: string) => {
    return (dispatch: Dispatch<SeatchAction>) => {
        dispatch({
            type: SearchActionTypes.SET_VALUE,
            payload: value
        })
    }
}