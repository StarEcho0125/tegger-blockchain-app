import {
    GET_TOKEN,
    GET_ADDRESS,
} from '../actions/auth';

const defaultState = {
    token: '',
    address: '',
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }

        case GET_ADDRESS: 
            return {
                ...state,
                address: action.payload,
            }
    
        default:
            return state
    }
}