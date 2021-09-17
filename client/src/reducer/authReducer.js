import isEmpty from "../validation/is-empty";

import { GET_ERRORS } from "../actions/types";
import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
    isAuthenticate: false,
    user: {}
};

export default function authReducer(state = initialState, action) {
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticate: !isEmpty(action.payload),
                user: action.payload
            };
        default:
            return state;
    }
};
