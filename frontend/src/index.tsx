import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import { Router } from 'components';
import { store } from 'app';

import * as serviceWorkerRegistration from 'serviceWorkerRegistration';
import reportWebVitals from 'reportWebVitals';

// Before you build this project, be sure to comment the line below
import 'assets/styles/root.scss';
//
// then uncomment the line below
// import 'assets/styles/style.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
