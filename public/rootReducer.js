import { combineReducers } from 'redux-immutable';
import routerReducer from './routerReducer';
import homeReducer from './reducers/index';

const rootReducer = combineReducers({
    home: homeReducer,
    routing: routerReducer
});

export default rootReducer;