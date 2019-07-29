import * as coinApiUtil from '../util/coin_api_util'

export const RECEIVE_COINS = "RECEIVE_COINS";
export const RECEIVE_COIN = "RECEIVE_COIN";
export const RECEIVE_DATA = "RECEIVE_DATA";


export const fetchCoins = () => (dispatch) => (
    coinApiUtil.fetchCoins().then(coins => dispatch({type: RECEIVE_COINS, coins}))
)

export const fetchCoin = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoin(symbol).then(coin => dispatch({type: RECEIVE_COIN, coin}))
)

export const fetchAll = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinAllData(symbol).then(data => dispatch({ type: RECEIVE_DATA, data }))
)

export const fetchYear = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinYearData(symbol).then(data => dispatch({type: RECEIVE_DATA, data}))
)
 
export const fetchMonth = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinMonthData(symbol).then(data => dispatch({type: RECEIVE_DATA, data}))
)
 
export const fetchWeek = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinWeekData(symbol).then(data => dispatch({type: RECEIVE_DATA, data}))
)
 
export const fetchDay = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinDayData(symbol).then(data => dispatch({type: RECEIVE_DATA, data}))
)
 
export const fetchHour = (symbol) => (dispatch) => (
    coinApiUtil.fetchCoinHourData(symbol).then(data => dispatch({type: RECEIVE_DATA, data}))
)
 
