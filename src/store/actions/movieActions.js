
export const addMovie = (movie) => {
    return {
        type: 'addMovie',
        payload: movie,
    }
}

export const delMovie = (id) => {
    return {
        type: 'deleteMovie',
        payload: id,
    }
}

export const toggleMovie = (id) => {
    return {
        type: 'toggleMovie',
        payload: id,
    }
}

export const getMovies = (movies) => {
    return {
        type: 'getMovies',
        payload: movies
    }
}