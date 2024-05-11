import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import api from '../../api/movie-service';
import { moviesState } from '../../model/initialStates';
import { MOVIE_SLICE_NAME } from '../../constants/constants';

const initialState = {
	movies: moviesState,
    isFetching: false,
    error: null,
};

export const getMovies = createAsyncThunk(
	`${MOVIE_SLICE_NAME}/getMovies`,
	async function (_, { rejectWithValue }) {
		try {
			const response = await api.get(`/${MOVIE_SLICE_NAME}`);
			if (response.status >= 400) {
				throw new Error(`Error status is ${response.status}`);
			}
			const { data } = response;
			return data;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

export const delMovie = createAsyncThunk(
	`${MOVIE_SLICE_NAME}/delMovie`,
	async (id, { rejectWithValue, dispatch }) => {
		try {
			const response = await api.delete(`/${MOVIE_SLICE_NAME}/${id}`);
			if (response.status >= 400) {
				throw new Error(
					`Can't delete movie. Error status is ${response.status}`
				);
			}
			dispatch(removeMovie({ id }));
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const toggleMovie = createAsyncThunk(
	`${MOVIE_SLICE_NAME}/toggleMovie`,
	async (id, { rejectWithValue, dispatch, getState }) => {
		const movie = getState().movieList.movies.find(
			(movie) => movie.id === id
		);
		try {
			const response = await api.patch(`/${MOVIE_SLICE_NAME}/${id}`, {
				isDone: !movie.isDone,
			});
			if (response.status >= 400) {
				throw new Error(
					`Can't change movie. Error status is ${response.status}`
				);
			}
			const { data } = response;
			console.log(data);
			dispatch(changeMovie(data));
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

export const addMovie = createAsyncThunk(
	`${MOVIE_SLICE_NAME}/addMovie`,
	async (movie, { rejectWithValue }) => {
		try {
			const response = await api.post(`/${MOVIE_SLICE_NAME}`, movie);
			if (response.status >= 400) {
				throw new Error(
					`Can't add movie. Error status is ${response.status}`
				);
			}
			const { data } = response;
			return data;
		} catch (error) {
			rejectWithValue(error.message);
		}
	}
);

const setError = (state, action) => {
    state.isFetching = false;
    state.error = action.payload
}

const setFetching = (state) => {
    state.isFetching = true;
    state.error = null;
}



const movieSlice = createSlice({
	name: MOVIE_SLICE_NAME,
	initialState,
	reducers: {
		// createMovie(state, { payload }) {
		// 	console.log(payload);
		// 	state.movies.push(payload);
		// },

		removeMovie(state, { payload }) {
			state.movies = [
				...state.movies.filter((movie) => movie.id !== payload),
			];
		},

		changeMovie(state, { payload }) {
			state.movies.map((movie) => {
				return movie.id === payload.id
					? { ...movie, isDone: !movie.isDone }
					: movie;
			});
		},
	},
    extraReducers: (builder) => {
        builder.addCase(getMovies.fulfilled, (state, {payload}) => {
            state.isFetching = false;
            state.movies = payload;
        });
        builder.addCase(getMovies.pending, setFetching)
        builder.addCase(getMovies.rejected, setError)
    }
});

const { actions, reducer } = movieSlice;

const { /* createMovie, */ removeMovie, changeMovie } = actions;

export default reducer;
