import { API_URL } from '../config';
import axios from 'axios';

export const SET_ASSET_DATA = 'MAIN REDUCER SET ASSET DATA';
export const SET_HISTORY_DATA = 'MAIN REDUCER SET HISTORY DATA';

export const getAssetData = () => async dispatch => {
    const assetRes = await axios.request({
        url: `${API_URL}/api/main/getAssetData`,
        method: 'get',
    }).catch( err => {
        console.log('error in get asset data: ', err);
    });

    if (assetRes && assetRes.data) {
        dispatch({
            type: SET_ASSET_DATA,
            payload: assetRes.data.data.data,
        })
    }
}

export const getHistoryData = id => async dispatch => {
    dispatch({
        type: SET_HISTORY_DATA,
        payload: [],
    });
    const historyRes = await axios.request({
        url: `${API_URL}/api/main/getHistoryData`,
        method: 'post',
        data: {
            id: id,
        }
    }).catch( err => {
        console.log('error in get history data: ', err);
    });

    if (historyRes && historyRes.data) {
        dispatch({
            type: SET_HISTORY_DATA,
            payload: historyRes.data.data.data,
        });
    }
}