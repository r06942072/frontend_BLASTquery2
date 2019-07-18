import {
    FETCH_LIST,
    SET_LIST,
    GET_LIST,
    SET_SEARCHBAR
} from './types';

export const fetchList = () => dispatch => {
    dispatch({
        type: FETCH_LIST,
        payload: [
            { "id": 1, "fullName": "Aethina tumdia", "isChecked": false },
            { "id": 2, "fullName": "Bombus terrestis", "isChecked": false },
            { "id": 3, "fullName": "Hyalella azteca", "isChecked": false }
        ]
    })
}
export const setList = (res) => dispatch => {
    dispatch({
        type: SET_LIST,
        payload: res
    })
}
export const getList = () => dispatch => {
    dispatch({
        type: GET_LIST
    })
}
export const setSearchbar = (res) => dispatch => {
    dispatch({
        type: SET_SEARCHBAR,
        payload: res
    })
}