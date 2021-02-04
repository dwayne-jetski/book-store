import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers/index';


//inital app state
const initialState = {};

//middleware
const loggerMiddleWare = createLogger();
const middleware = [thunk, loggerMiddleWare];

//...middleware (spread operator) because we want it to be added onto the middlware array
const store = createStore(
    rootReducer,
    initialState, 
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;