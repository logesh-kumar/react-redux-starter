
import {
    INCREMENT,
    DECREMENT
} from './actionTypes'

export const increment = value => {
    return {
        type: INCREMENT,
        payload: value + 1
    }
}

export const decrement = value => {
    return {
        type: DECREMENT,
        payload: value - 1
    }
}