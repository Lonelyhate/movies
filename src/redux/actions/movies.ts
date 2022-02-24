import axios from 'axios';
import { Dispatch } from 'react';
import { OrderByValue, TypeLanguage, TypeOrderBy, TypeRating, TypeYear } from '../../types/types';
import { MoviesAction, MoviesActionTypes } from '../types/movies';

export const fetchMovies = (
    page: number | null = null,
    value: string | null = null,
    quality: string | null = null,
    genre: string | null = null,
    rating: string | number | null = null,
    year: string | null = null,
    language: string | null = null,
    orderBy: string | null = null,
) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            let response;
            value
                ? (response = await axios.get(
                      `https://yts.mx/api/v2/list_movies.json?query_term=${value}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&${
                          orderBy === OrderByValue.LATEST
                              ? `order_by=desc`
                              : orderBy === OrderByValue.OLDEST
                              ? `order_by=asc`
                              : `sort_by=${orderBy}`
                      }&page=${page}`,
                  ))
                : (response = await axios.get(
                      `https://yts.mx/api/v2/list_movies.json?page=${page}&quality=${quality}`,
                  ));
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_SUCCES,
                payload: {
                    items: response.data.data.movies,
                    totalItems: response.data.data.movie_count,
                },
            });
        } catch (e) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: 'Ошибка получения запроса',
            });
        }
    };
};

export const activePage = (page: string | number) => {
    return (dispatch: Dispatch<MoviesAction>) => {
        dispatch({
            type: MoviesActionTypes.FETCH_PAGE,
            payload: page,
        });
    };
};

export const fetchPopularMovies = () => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            const response = await axios.get(
                'https://yts.mx/api/v2/list_movies.json?sort_by=download_count',
            );
            dispatch({
                type: MoviesActionTypes.FETCH_POPULAR_MOVIES,
                payload: response.data.data.movies,
            });
        } catch (e) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: 'Ошибка получения запроса',
            });
        }
    };
};

export const fetchLastMovies = () => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            const response = await axios.get(
                'https://yts.mx/api/v2/list_movies.json?order_by=desc',
            );
            dispatch({
                type: MoviesActionTypes.FETCH_LAST_MOVIES,
                payload: response.data.data.movies,
            });
        } catch (e) {
            dispatch({
                type: MoviesActionTypes.FETCH_MOVIES_ERROR,
                payload: 'Ошибка получения запроса',
            });
        }
    };
};
