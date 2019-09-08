import React from 'react';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import{Provider} from 'react-redux';
import thunk from 'redux-thunk'
import ReactDOM from 'react-dom';
import itemReducer from './reducers/itemReducer';
import App from './App';
import rootReducer from './reducers/index';
const composeEnhancers = process.env.NODE_ENV? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :null|| compose;
const store=createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))
const app=
<Provider store={store}>
<App />
</Provider>
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
