import {connect} from 'react-redux'; 
import { fetchCoins, fetchCoinMetadatum, fetchCoin, fetchAll, fetchYear, fetchMonth, fetchWeek, fetchDay, fetchHour} from "../../../actions/coin_actions"
import {fetchCoinNews, fetchGeneralNews} from '../../../actions/news_actions'; 
import {createTransaction, fetchTransactions} from '../../../actions/transaction_actions'; 
import CoinShow from './coin_show'; 

const msp = (state, ownProps) => {
    return {
      coin: state.entities.coins[ownProps.match.params.symbol],
      symbol: ownProps.match.params.symbol,
      data: state.entities.coinData.length ? state.entities.coinData : [],
      metadata: state.entities.coinMetadata[ownProps.match.params.symbol],
      news: state.entities.news.length ? state.entities.news : []
    };
}

const mdp = (dispatch) => ({
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol)),
    fetchAll: (symbol) => dispatch(fetchAll(symbol)), 
    fetchYear: (symbol) => dispatch(fetchYear(symbol)),
    fetchMonth: (symbol) => dispatch(fetchMonth(symbol)),
    fetchWeek: (symbol) => dispatch(fetchWeek(symbol)),
    fetchDay: (symbol) => dispatch(fetchDay(symbol)),
    fetchHour: (symbol) => dispatch(fetchHour(symbol)), 
    fetchCoinNews: (name) => dispatch(fetchCoinNews(name)), 
    fetchGeneralNews: () => dispatch(fetchGeneralNews()),
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchTransactions: ()=> dispatch(fetchTransactions()),
    fetchCoinMetadatum: (symbol) => dispatch(fetchCoinMetadatum(symbol))
})

export default connect(msp, mdp)(CoinShow)

