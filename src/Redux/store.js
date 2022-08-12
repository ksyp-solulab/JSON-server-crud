import {applyMiddleware,createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './userSaga';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

const store = configureStore({
    reducer:rootReducer,
    middleware: () => [sagaMiddleware]
    // applyMiddleware(...middlewares)
});

sagaMiddleware.run(rootSaga);

export default store;