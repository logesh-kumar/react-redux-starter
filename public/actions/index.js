import axios from 'axios';
import { browserHistory } from 'react-router';
import {
    TEXT_CHANGED,
    GET_IMPRESSIONS_BY_CITY
} from './actionTypes';
const serverURL = 'http://localhost:3000/api';
export function changeText(randomString) {
    return dispatch => {
        dispatch({ type: TEXT_CHANGED, randomString: randomString })
    }
}

