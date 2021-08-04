import axios from 'axios';
import { SERVER_URL } from '../config';

export const GET_TOKEN = 'AUTH REDUCER GET TOKEN';
export const GET_ADDRESS = 'AUTH REDUCER GET ADDRESS';

export const getToken = () => async dispatch => {
    const res = await axios.request({
        method: 'GET',
        url: `${SERVER_URL}/token`,
    });

    if (res && res.data) {
        dispatch({
            type: GET_TOKEN,
            payload: res.data,
        })
    }
}

export const getAddress = data => async dispatch => {
    const res = await axios.request({
        method: 'POST',
        url: `${SERVER_URL}/auth`,
        data: data,
    });

    if (res && res.data) {
        dispatch({
            type: GET_ADDRESS,
            payload: res.data,
        });
    }
}