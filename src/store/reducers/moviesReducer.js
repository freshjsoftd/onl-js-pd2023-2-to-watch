import { moviesState } from '../../model/initialStates';
import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
	movies: moviesState,
};

export default function moviesReducer(state = initialState, { type, payload }) {
	switch (type) {
		case ACTION_TYPES.ADD_MOVIE:
			return { ...state, movies: [...state.movies, payload] };
		case ACTION_TYPES.DELETE_MOVIE:
			return {
				...state,
				movies: state.movies.filter((movie) => movie.id !== payload),
			};
		case ACTION_TYPES.TOGGLE_MOVIE:
			return {
				...state,
				movies: state.movies.map((movie) =>
					movie.id === payload
						? { ...movie, isDone: !movie.isDone }
						: movie
				),
			};
		case ACTION_TYPES.GET_MOVIES:
			return { ...state, movies: payload };
		default:
			return state;
	}
}
