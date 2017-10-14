import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App.jsx';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, compose } from 'redux';
import songsReducer from '../redux/reducer.js'
import {persistStore, autoRehydrate} from 'redux-persist'

let store = createStore(
  songsReducer,
  [{name: 'first song', key: Math.floor((Math.random() * 1000) + 1)}],
  compose(
    applyMiddleware(),
    autoRehydrate()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
