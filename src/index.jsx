import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, CombineReducer } from 'redux';


import '../assets/stylesheets/application.scss';

import flatReducer from './reducers/flat_reducer';

const reducer = CombineReducer({
  selectedFlat: flatReducer
});

import App from './components/app';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducer)}>
      <App />
    </Provider>,
    root
  );
}
