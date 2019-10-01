
import {RECEIVE_TRANSACTION, RECEIVE_TRANSACTIONS} from '../actions/transaction_actions'; 
import { LOGOUT_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge'


const transactionReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            return action.transaction; 
        case RECEIVE_TRANSACTION:
            newState[action.transaction.id] = action.transaction; 
            return newState;
        case LOGOUT_CURRENT_USER:
            newState = {};
            return newState;
        default:
            return state;

    }
};

export default transactionReducer; 

