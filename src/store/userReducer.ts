import { REDUX_CONTS } from '../utils/constants';

const INITIAL_STATE = {
    user: {},
    accessToken: '',
    insertionDate: '',
};

function userReducer(state = INITIAL_STATE, action: any) {
    let dispatchIn = {};
    switch (action.type) {
        case REDUX_CONTS.LOGGED_IN:
            dispatchIn = {
                ...state,
                user: action.user,
                accessToken: action.accessToken,
                insertionDate: new Date()
            };

            return dispatchIn;
        case REDUX_CONTS.LOGGED_OUT:
            const dispatchOut = {
                ...state,
                user: {},
                authToken: '',
                insertionDate: ''
            };

            return dispatchOut;
        default:
            return state;
    }
}

export default userReducer;