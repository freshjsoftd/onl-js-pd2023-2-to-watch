import { put } from 'redux-saga/effects';

import api from '../api/movie-service';
import {
	getMoviesRequest,
	getMoviesSuccess,
	getMoviesError,
    addMovieRequest,
    addMovieSuccess,
    addMovieError,
} from '../store/actions/movieActions';

export function* getMoviesSaga() {
	yield put(getMoviesRequest());
    try {
        const movies = yield api.get('/watch').then(({data}) => data);
        yield put(getMoviesSuccess(movies));
    } catch (error) {
        yield put(getMoviesError(error))
    }
}

export function* createMovieSaga({payload}){
    yield put(addMovieRequest());
    try {
        const newMovie = yield api.post('/watch', payload).then(({data}) => data);
        yield put(addMovieSuccess(newMovie));
    } catch (error) {
        yield put(addMovieError(error))
    }
}


