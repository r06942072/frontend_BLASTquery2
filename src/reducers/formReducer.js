import {
    FETCH_LIST,
    SET_LIST,
    GET_LIST,
    SET_SEARCHBAR
} from '../actions/types';

const initialState = {
    searchbarText: '',
    allList: [
        { "id": 11, "fullName": "Chun-Hung", "isChecked": false },
        { "id": 22, "fullName": "Johnny", "isChecked": false },
        { "id": 33, "fullName": "dennis", "isChecked": false }
    ],
    whichProgram: 'firstProgram'
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