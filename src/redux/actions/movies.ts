import axios from 'axios';
import { Dispatch } from 'react';
import { TypeGenre, TypeLanguage, TypeOrderBy, TypeQuality, TypeRating, TypeYear } from '../../types/types';
import { MoviesAction, MoviesActionTypes } from '../types/movies';

export const fetchMovies = (
    value: string | null = null,
    quality: TypeQuality | null = null,
    genre: TypeGenre | null = null,
    rating: TypeRating | null = null,
    year: TypeYear | null = null,
    language: TypeLanguage | null = null,
    orderBy: TypeOrderBy | null = null,
) => {
    return async (dispatch: Dispatch<MoviesAction>) => {
        try {
            dispatch({ type: MoviesActionTypes.FETCH_MOVIES });
            let response
            value
                ? (response = await axios.get('https://yts.mx/api/v2/list_movies.json'))
                : (response = await axios.get('https://yts.mx/api/v2/list_movies.json'));
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
