import {BANK} from "../constants/actionConstants";

const initialState = {
    content: [],
    pageable: {
        page: 0,
        size: 10,
        total: 0
    }
};
export default function bankReducer (state = initialState, action) {
    switch (action.type) {
        case BANK:
            return action.payload;
        default:
            return state;
    }
}