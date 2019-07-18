import {
    FETCH_LIST,
    SET_LIST,
    GET_LIST,
    SET_SEARCHBAR
} from '../actions/types';

const initialState = {
    searchbarText: '',
    allList: [
        { "id": 11, "fullName": "PleaseFetchDataFromRemote", "isChecked": false },
        { "id": 22, "fullName": "reducer/formReducer.js", "isChecked": false },
        { "id": 33, "fullName": "Chun-Hung", "isChecked": false }
    ],
    whichProgram: 'blastn'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LIST:
            return {
                ...state,
                allList: action.payload
            };
        case SET_LIST:
            return {
                ...state,
                allList: action.payload
            };
        case GET_LIST:
            return {
                ...state,
                allList: state.allList
            };
        case SET_SEARCHBAR:
            return {
                ...state,
                searchbarText: action.payload
            };
        default:
            return state;
    }
}