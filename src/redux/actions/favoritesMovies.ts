import { Dispatch } from "react"
import { IMovie } from "../../types/types"
import { FavoritesMoviesAction, FavoritesMoviesTypes } from "../types/favoritesMovies"

export const fecthFavoritesMovies = () => {
    return (dispatch: Dispatch<FavoritesMoviesAction>) => {
        dispatch({type: FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES})
        dispatch({type: FavoritesMoviesTypes.FETCH_FAVORITES_MOVIES_SUCCES})
    }
}

export const addFavoritesMovie = (movie: IMovie) => {
    return (dispatch: Dispatch<FavoritesMoviesAction>) => {
        dispatch({
            type: FavoritesMoviesTypes.FAVORITES_MOVIE_ADD,
            payload: movie
        })
    }
}

export const deleteFromFavorites = (id: number) => {
    return (dispatch: Dispatch<FavoritesMoviesAction>) => {
        dispatch({
            type: FavoritesMoviesTypes.FAVORITES_MOVIE_DELETE,
            payload: id
        })
    }
}