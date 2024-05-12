import { configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';

import movieReducer from './slices/movieSlice'


export default configureStore({
    // reducer: () => {},
    reducer: {
        movieList: movieReducer,
        // actorList: () => {},
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
