import {
    SET_ASSET_DATA,
    SET_HISTORY_DATA,
} from '../actions';

const defaultState = {
    assetData: [],
    historyData: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case SET_ASSET_DATA: {
            return {
                ...state,
                assetData: action.payload,
            }
        }
        case SET_HISTORY_DATA: {
            return {
                ...state,
                historyData: action.payload,
            }
        }
        default:
            return state
    }
}