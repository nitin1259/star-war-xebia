import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import { appReducers } from './app.reducers';




export function configureStore(initialState){
    return createStore(appReducers, initialState , applyMiddleware(thunk));
}