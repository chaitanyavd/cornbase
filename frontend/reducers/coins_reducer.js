import {RECEIVE_COINS, RECEIVE_COIN} from '../actions/coin_actions'; 
import merge from "lodash/merge"

const coinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_COINS:
            // debugger
            action.coins.forEach(coin => (newState[coin.rank] = coin))
            // debugger
            return newState; 

        case RECEIVE_COIN:
            action.coin.forEach(coin => newState[coin.rank] = coin)
            return newState; 

            
        default:
            return state;
    }
};

export default coinsReducer;


