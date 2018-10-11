import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { configureStore } from './redux/store';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SearchPlanet from './component/app.search';
import Login from './component/app.login'
import Home from './component/app.home';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <Home />
                <Switch>
                    <Route path="/" component={Login} exact />
                    <Route path="/login" component={Login} />
                    <Route path="/search" component={SearchPlanet} />
                </Switch>
            </div>

        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
