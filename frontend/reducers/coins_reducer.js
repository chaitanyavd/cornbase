import {RECEIVE_COINS, RECEIVE_COIN} from '../actions/coin_actions'; 
import merge from "lodash/merge"

const coinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_COINS:
            // debugger
            action.data.data.forEach(coin => newState[coin.rank] = coin)
            return newState; 
            // return action.data
        case RECEIVE_COIN:
            return merge({}, state, { [action.coin.id]: action.coin });
        default:
            return state;
    }
};

export default coinsReducer;
