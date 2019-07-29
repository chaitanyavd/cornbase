import { RECEIVE_DATA } from '../actions/coin_actions';
import merge from "lodash/merge"

const coinDataReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_DATA:
            return action.data
        default:
            return state;
    }
};

export default coinDataReducer;
