import ACTION_TYPES from './actionTypes';

export const addMovie = (movie) => {
    return {
        type: ACTION_TYPES.ADD_MOVIE,
        payload: movie,
    }
}

export const delMovie = (id) => {
    return {
        type: ACTION_TYPES.DELETE_MOVIE,
        payload: id,
    }
}

export const toggleMovie = (id) => {
    return {
        type: ACTION_TYPES.TOGGLE_MOVIE,
        payload: id,
    }
}

export const getMovies = (movies) => {
    return {
        type: ACTION_TYPES.GET_MOVIES,
        payload: movies
    }
}