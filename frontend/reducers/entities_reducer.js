import { combineReducers } from 'redux'; 
import usersReducer from './users_reducer'; 
import coinsReducer from './coins_reducer'; 
import coinDataReducer from './coin_data_reducer'; 
import watchlistReducer from './watchlist_reducer'; 

const entitiesReducer = combineReducers({
    users: usersReducer, 
    coins: coinsReducer, 
    coinData: coinDataReducer, 
    watchlist: watchlistReducer
    
});

export default entitiesReducer;
