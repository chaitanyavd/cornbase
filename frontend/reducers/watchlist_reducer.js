// import { RECEIVE_COINS, RECEIVE_COIN } from '../actions/coin_actions';
// import merge from "lodash/merge"

// const coinsReducer = (state = {}, action) => {
//     Object.freeze(state);
//     let newState = merge({}, state)
//     switch (action.type) {
//         case RECEIVE_COINS:
//             action.coins.forEach(coin => (newState[coin.id] = coin))
//             return newState;

//         case RECEIVE_COIN:
//             action.coin.forEach(coin => newState[coin.id] = coin)
//             return newState;

//         default:
//             return state;
//     }
// };

// export default coinsReducer;
// const PostsReducer = (oldState = {}, action) => {
//     Object.freeze(oldState);
//     const newState = merge({}, oldState);

//     switch (action.type) {
//         case RECEIVE_ALL_POSTS:
//             return action.posts;
//         case RECEIVE_POST:
//             newState[action.post.id] = action.post;
//             return newState;
//         case REMOVE_POST:
//             delete newState[action.postId]
//             return newState;
//         default:
//             return oldState;
//     }
// };


import {RECEIVE_WATCHLISTS, RECEIVE_WATCHLIST, REMOVE_WATCHLIST} from '../actions/watchlist_actions'; 
import {LOGOUT_CURRENT_USER} from '../actions/session_actions'; 
import merge from 'lodash/merge'


const watchlistReducer = (state = {}, action) => {
    Object.freeze(state); 
    let newState = merge({}, state)
    switch(action.type) {
        case RECEIVE_WATCHLISTS: 
               action.watchlists.forEach(watchlist => (newState[watchlist.id] = watchlist))
              return newState;
            // return action.watchlists; 
        case RECEIVE_WATCHLIST: 
             action.watchlist.forEach(watchlist => newState[watchlist.id] = watchlist)
             return newState;
            // newState[action.watchlist.id] = action.watchlist;
            // return newState;
        case LOGOUT_CURRENT_USER:
            newState = {};
            return newState; 
        case REMOVE_WATCHLIST: 
            delete newState[action.watchlistId]
            return newState; 
        default: 
            return state; 

    }
}; 

export default watchlistReducer; 