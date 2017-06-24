import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './rootReducer';
import routes from './routes'; 
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import Immutable from 'immutable';


//Apply your middlewares before creating the store
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
//Make the store support immutable types
const initialState = Immutable.Map();

// Create an enhanced history that syncs navigation events with the store.
const store = createStoreWithMiddleware(reducers, initialState,
    // Enable redux dev tools
    window.devToolsExtension && window.devToolsExtension()
);

// Create an enhanced history that syncs navigation events with the store.
const history = syncHistoryWithStore(browserHistory, store, {
    selectLocationState(state) {
        return state.get('routing').toJS();
    }
});

//Explicitly check  and activate HMR
if (module.hot) {
    module.hot.accept();
}
const target = document.querySelector('.container');
class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>                
                    <Router history={history}>
                        {routes}
                    </Router>                
            </Provider>
        );
    }
}

ReactDOM.render(<Root />, target);