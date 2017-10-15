import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import {Provider} from 'react-redux'
import {applyMiddleware, createStore, compose} from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist'
import songsModule from '../redux/songModule.js';
import logger from 'redux-logger';

let store = createStore(
  songsModule.reducer,
  [],
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
  <App/>
</Provider>, document.getElementById('root'));
