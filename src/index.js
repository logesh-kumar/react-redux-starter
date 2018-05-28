import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, } from 'react-router-dom'
import App from './App'
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducers from './rootReducer'

export default class Root extends Component {
    render() {
        const INITIAL_STATE = {

        };

        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
        const store = createStore(reducers, INITIAL_STATE, composeEnhancers())

        console.log(store)
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </Provider >
        )
    }
};

ReactDom.render(<Root />, document.getElementById('root'));


