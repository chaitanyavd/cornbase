import * as coinApiUtil from '../util/coin_api_util'

export const RECEIVE_COINS = "RECEIVE_COINS";
export const RECEIVE_COIN = "RECEIVE_COIN";


export const RECEIVE_YEAR_DATA = "RECEIVE_YEAR_DATA";
export const RECEIVE_MONTH_DATA = "RECEIVE_MONTH_DATA";
export const RECEIVE_WEEK_DATA = "RECEIVE_WEEK_DATA";
export const RECEIVE_DAY_DATA = "RECEIVE_DAY_DATA";
export const RECEIVE_HOUR_DATA = "RECEIVE_HOUR_DATA";



export const fetchCoins = () => (dispatch) => (
    coinApiUtil.fetchCoins().then(coins => dispatch({type: RECEIVE_COINS, coins}))
)

export const fetchCoin = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoin(symbol).then(coin => dispatch({type: RECEIVE_COIN, coin}))
)

export const fetchYear = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinYearData(symbol).then(data => dispatch({type: RECEIVE_YEAR_DATA, data}))
)
 
