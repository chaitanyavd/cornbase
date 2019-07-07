import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import coinsReducer from './coins_reducer'; 

const entitiesReducer = combineReducers({
    users: usersReducer, 
    coins: coinsReducer
});

export default entitiesReducer;
