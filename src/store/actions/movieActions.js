import ACTION_TYPES from './actionTypes';
// Creating
export const addMovieAction = (movie) => {
    return {
        type: ACTION_TYPES.POST_MOVIE_ACTION,
        payload: movie,
    }
}
export const addMovieRequest = () => {
    return {
        type: ACTION_TYPES.POST_MOVIE_REQUEST,
    }
}
export const addMovieSuccess = (movie) => {
    return {
        type: ACTION_TYPES.POST_MOVIE_SUCCESS,
        payload: movie,
    }
}
export const addMovieError = (error) => {
    return {
        type: ACTION_TYPES.POST_MOVIE_ERROR,
        payload: error,
    }
}
// Deleting
export const delMovieAction = (id) => {
    return {
        type: ACTION_TYPES.DELETE_MOVIE_ACTION,
        payload: id,
    }
}
export const delMovieRequest = () => {
    return {
        type: ACTION_TYPES.DELETE_MOVIE_REQUEST,
    }
}
export const delMovieSuccess = (payload) => {
    return {
        type: ACTION_TYPES.DELETE_MOVIE_SUCCESS,
        payload,
    }
}
export const delMovieError = (error) => {
    return {
        type: ACTION_TYPES.DELETE_MOVIE_ERROR,
        payload: error,
    }
}
// Updating
export const toggleMovieAction = (movie) => {
    return {
        type: ACTION_TYPES.PUT_MOVIE_ACTION,
        payload: movie,
    }
}
export const toggleMovieRequest = () => {
    return {
        type: ACTION_TYPES.PUT_MOVIE_REQUEST,
    }
}
export const toggleMovieSuccess = (movie) => {
    return {
        type: ACTION_TYPES.PUT_MOVIE_SUCCESS,
        payload: movie,
    }
}
export const toggleMovieError = (error) => {
    return {
        type: ACTION_TYPES.PUT_MOVIE_ERROR,
        payload: error,
    }
}
// Getting
export const getMoviesAction = () => {
    return {
        type: ACTION_TYPES.GET_MOVIES_ACTION,
    }
}
export const getMoviesRequest = () => {
    return {
        type: ACTION_TYPES.GET_MOVIES_REQUEST,
    }
}
export const getMoviesSuccess = (movies) => {
    return {
        type: ACTION_TYPES.GET_MOVIES_SUCCESS,
        payload: movies,
    }
}
export const getMoviesError = (error) => {
    return {
        type: ACTION_TYPES.GET_MOVIES_ERROR,
        payload: error,
    }
}