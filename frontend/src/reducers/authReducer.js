import {LOGIN, LOGOUT} from "../constants/actionConstants";

const initialState = {
    isAuth: false,
    token: null,
    userId: null,
    username: null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN: {
            return action.payload;
        }
        case LOGOUT: {
            return initialState;
        }
        default:
            return state;
    }
}
