import {RECEIVE_COINS, RECEIVE_COIN} from '../actions/coin_actions'; 
import merge from "lodash/merge"

const coinsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_COINS:
            action.coins.forEach(coin => (newState[coin.id] = coin))
            return newState; 

        case RECEIVE_COIN:
            action.coin.forEach(coin => newState[coin.id] = coin)
            return newState; 
  
        default:
            return state;
    }
};

export default coinsReducer;


