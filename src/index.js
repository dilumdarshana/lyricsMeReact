import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store';
import routes from './routes';

render(
    <Provider store={store}>{routes}</Provider>,
    document.querySelector('#container')
);
