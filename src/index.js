import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Login from './component/app.login';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux'
import SearchPlanet from './component/app.search';
const store = configureStore();

ReactDOM.render(
    <Provider store={store}><SearchPlanet /></Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
