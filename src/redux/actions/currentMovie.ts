import axios from 'axios';
import { Dispatch } from 'react';
import { CurrentMovieAction, CurrentMovieActionTypes } from '../types/currentMovie';

export const fetchCurrentMovie = (id: number) => {
    return async (dispatch: Dispatch<CurrentMovieAction>) => {
        try {
            dispatch({ type: CurrentMovieActionTypes.FETCH_MOVIE });
            const [responseMovie, responseSimilar] = await Promise.all([
                axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`),
                axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`),
            ]);
            dispatch({
                type: CurrentMovieActionTypes.FETCH_MOVIE_SUCCES,
                payload: responseMovie.data.data.movie,
            });
            dispatch({
                type: CurrentMovieActionTypes.FETCH_MOVIE_SIMILAR,
                payload: responseSimilar.data.data.movies
            });
        } catch (e) {
            dispatch({
                type: CurrentMovieActionTypes.FETCH_MOVIE_ERROR,
                payload: 'Ошибка загрузки фильма',
            });
        }
    };
};
