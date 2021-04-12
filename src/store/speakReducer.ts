import { REDUX_CONTS } from './../utils/constants';

const INITIAL_STATE = {
    speak: true
};

function speakReducer(state = INITIAL_STATE, action: any) {
    let dispatchIn = {};
    switch (action.type) {
        case REDUX_CONTS.ENTERED_IN_APP:
            dispatchIn = {
                ...state,
                speak: action.speak
            };

            return dispatchIn;
        default:
            return state;
    }
}

export default speakReducer;
