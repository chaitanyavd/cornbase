
import * as watchlistApiUtil from '../util/watchlist_api_util'; 

export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS'; 
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST'
export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST'; 



export const fetchWatchlists = () => (dispatch) => (
    watchlistApiUtil.fetchWatchlists().then(watchlists => dispatch({ type: RECEIVE_WATCHLISTS, watchlists}))
)

export const createWatchlist = (watchlist) => (dispatch) => (
    watchlistApiUtil.createWatchlist(watchlist).then(watchlist => dispatch({ type: RECEIVE_WATCHLIST, watchlist}))
)

export const deleteWatchlist = (id) => (dispatch) => (
    watchlistApiUtil.deleteWatchlist(id).then(watchlist => dispatch({ type: REMOVE_WATCHLIST, watchlistId: watchlist.id}))
)

