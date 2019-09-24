
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
        case RECEIVE_WATCHLIST: 
             action.watchlist.forEach(watchlist => newState[watchlist.id] = watchlist)
             return newState;
        case LOGOUT_CURRENT_USER:
            newState = {};
            return newState; 
        case REMOVE_WATCHLIST: 
            debugger 
            delete newState[action.watchlistId]
            return newState; 
        default: 
            return state; 

    }
}; 

export default watchlistReducer; 