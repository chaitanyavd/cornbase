import * as coinApiUtil from '../util/coin_api_util'

export const RECEIVE_COINS = "RECEIVE_COINS";
export const RECEIVE_COIN = "RECEIVE_COIN";

export const fetchCoins = () => (dispatch) => (
    coinApiUtil.fetchCoins().then(coins => dispatch({type: RECEIVE_COINS, coins}))
)

export const fetchCoin = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoin(symbol).then(coin => dispatch({type: RECEIVE_COIN, coin}))
)

