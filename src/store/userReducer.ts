import { REDUX_CONTS } from './../utils/constants';

const INITIAL_STATE = {
    user: {},
    accessToken: '',
};

function userReducer(state = INITIAL_STATE, action: any) {
    let dispatchIn = {};
    switch (action.type) {
        case REDUX_CONTS.LOGGED_IN:
            dispatchIn = {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
            };

            return dispatchIn;
        case REDUX_CONTS.LOGGED_OUT:
            const dispatchOut = {
                ...state,
                user: {},
                authToken: '',
            };

            return dispatchOut;
        default:
            return state;
    }
}

export default userReducer;
