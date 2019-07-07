import {RECEIVE_COINS, RECEIVE_COIN} from '../actions/coin_actions'; 

const coinsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_COINS:
            return action.coins
        case RECEIVE_COIN:
            return merge({}, state, { [action.coin.id]: action.coin });
        default:
            return state;
    }
};

export default coinsReducer;
