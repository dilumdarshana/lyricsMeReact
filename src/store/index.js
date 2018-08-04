import { createBrowserHistory } from 'history';
import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import 'regenerator-runtime/runtime'
import mainReducer from './../reducers';
import rootSaga from './../sagas';
//import middlewares from './../middleware';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
console.log('his',  history);
const middlewares = [
    sagaMiddleware,
    routerMiddleware(history)
];

// mount it on the Store
const store = compose(
    // Enables your middleware:
    // applyMiddleware(thunk), // any Redux middleware, e.g. redux-thunk
    applyMiddleware(...middlewares),
    // Provides support for DevTools via Chrome extension
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore)(connectRouter(history)(mainReducer));
  
  // Extensions
  store.runSaga = sagaMiddleware.run;
  store.asyncReducers = {};

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
