import * as newsApiUtil from "../util/news_api_util"; 
export const RECEIVE_COIN_NEWS = "RECEIVECOINNEWS"; 
export const RECEIVE_ALL_NEWS = "RECEIVEALLNEWS"; 


export const fetchCoinNews = (name) => dispatch => (
    newsApiUtil.fetchCoinNews(name).then(news => dispatch({type: RECEIVE_COIN_NEWS, news}))
)

export const fetchGeneralNews = () => dispatch => (
    newsApiUtil.fetchGeneralNews().then(news => dispatch({type: RECEIVE_ALL_NEWS, news}))
)

