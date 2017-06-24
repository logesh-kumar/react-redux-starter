import {
    TEXT_CHANGED,
    GET_IMPRESSIONS_BY_CITY
} from '../actions/actionTypes';

import { fromJS, Map } from 'immutable';

function getNewState(state, newState) {
    return state.merge(newState);
}

export default function (state = fromJS({}), action) {

    switch (action.type) {
        case 'TEXT_CHANGED':
            return getNewState(state, { randomString: action.randomString });
    }
    return state;
}
