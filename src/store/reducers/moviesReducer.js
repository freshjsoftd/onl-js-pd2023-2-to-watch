import {moviesState} from '../../model/initialMovies';

const initialState = {
    movies: moviesState,
}

export default function moviesReducer(state = initialState, {type, payload}){

    switch(type){
        case 'addMovie': 
            return {...state, movies: [...state.movies, payload]};
        case 'deleteMovie':
            return {...state, movies: state.movies.filter((movie) => movie.id !== payload)};
        case 'toggleMovie': 
            return {...state, movies: state.movies.map((movie) => movie.id === payload
                 ? {...movie, isDone: !movie.isDone}
                : movie)};
        case 'getMovies': 
            return {...state, movies: payload}
        default: return state;
    }
}