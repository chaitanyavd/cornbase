
import {RECEIVE_COIN_NEWS, RECEIVE_ALL_NEWS} from "../actions/news_actions"; 
import merge from "lodash/merge"; 

const newsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_ALL_NEWS: 
            return action.news
        case RECEIVE_COIN_NEWS: 
            return action.news; 
        default: 
            return state; 
    }
}

export default newsReducer; 