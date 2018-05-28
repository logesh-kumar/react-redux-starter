
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, value: action.payload }
        case 'DECREMENT':
            return { ...state, value: action.payload }
    }

    return state
}