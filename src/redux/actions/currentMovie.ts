import axios from "axios"
import { Dispatch } from "react"
import { CurrentMovieAction, CurrentMovieActionTypes } from "../types/currentMovie"

export const fetchCurrentMovie = (id: number) => {
    return async (dispatch: Dispatch<CurrentMovieAction>) => {
        try {
            dispatch({type: CurrentMovieActionTypes.FETCH_MOVIE})
            const response = await axios.get(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`,
            );
            dispatch({
                type: CurrentMovieActionTypes.FETCH_MOVIE_SUCCES,
                payload: response.data.data.movie
            })
            console.log(response.data.data.movie)
        } catch(e) {
            dispatch({
                type: CurrentMovieActionTypes.FETCH_MOVIE_ERROR,
                payload: 'Ошибка загрузки фильма'
            })
        }
    }
}