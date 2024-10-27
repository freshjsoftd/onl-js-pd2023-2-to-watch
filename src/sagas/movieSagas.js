import { put } from 'redux-saga/effects';

import api from '../api/movie-service';
import {
	getMoviesRequest,
	getMoviesSuccess,
	getMoviesError,
    addMovieRequest,
    addMovieSuccess,
    addMovieError,
    toggleMovieRequest,
    toggleMovieSuccess,
    toggleMovieError,
    delMovieRequest,
    delMovieSuccess,
    delMovieError,
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

export function* updateMovieSaga({payload}){
    yield put(toggleMovieRequest());
    try {
        const updatedMovie = yield api.put(`/watch/${payload.id}`, payload)
            .then(({data}) => data);
        yield put(toggleMovieSuccess(updatedMovie));
    } catch (error) {
        yield put(toggleMovieError(error))
    }
}

export function* deleteMovieSaga({payload}){
    yield put(delMovieRequest());
    try {
        yield api.delete(`/watch/${payload}`);
        yield put(delMovieSuccess(payload))
    } catch (error) {
        yield put(delMovieError(error))
    }
}


