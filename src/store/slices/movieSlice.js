import { createSlice} from '@reduxjs/toolkit';

import {moviesState} from '../../model/initialStates';
import {MOVIE_SLICE_NAME} from '../../constants/constants'

const initialState = {
    movies: moviesState,

}

const movieSlice = createSlice({
    name: MOVIE_SLICE_NAME,
    initialState,
    reducers: {
        createMovie(state, {payload}){
            console.log(payload);
            state.movies.push(payload)
        },

        removeMovie(state, {payload}){
            state.movies = [...state.movies.filter((movie) => movie.id !== payload.id)]
        },

        changeMovie(state, {payload}){
            state.movies.map((movie) => {
                return movie.id === payload.id
                    ? {...movie, isDone: !movie.isDone}
                    : movie
            })
        }
    }
})

const { actions, reducer} = movieSlice;

const {createMovie, removeMovie, changeMovie} = actions;

export default reducer;