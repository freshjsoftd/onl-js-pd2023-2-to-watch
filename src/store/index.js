import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from '@redux-devtools/extension';

import rootReducer from './reducers';

/* function logger(store){
    return function(next){
        return function(action){
            console.log('Action is working', action);
            next(action)
        }
    }
} */

const middleware = applyMiddleware(logger)

export default createStore(rootReducer, composeWithDevTools(middleware));
