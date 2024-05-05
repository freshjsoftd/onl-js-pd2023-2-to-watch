import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas'

import rootReducer from './reducers';

/* function logger(store){
    return function(next){
        return function(action){
            console.log('Action is working', action);
            next(action)
        }
    }
} */

const sagaMiddleware = createSagaMiddleware();

const middleware = applyMiddleware(sagaMiddleware, logger)

export default createStore(rootReducer, composeWithDevTools(middleware));

sagaMiddleware.run(rootSaga)
