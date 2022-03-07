import React from 'react';
import ReactDOM from 'react-dom';
import './sass/styles.sass';
import store from './redux/store'
import { Provider } from 'react-redux'
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);