import { RECEIVE_YEAR_DATA } from '../actions/coin_actions';
import merge from "lodash/merge"




const coinDataReducer = (state = {}, action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_YEAR_DATA:
            return action.data
            // return merge({}, state, action.data )
            
        default:

            return state;
    }
};



// *PARSER FUNCTION 


    
export default coinDataReducer;