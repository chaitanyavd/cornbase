import {connect} from 'react-redux'; 
import {fetchCoins, fetchCoin, fetchYear} from '../../actions/coin_actions';
import {fetchWatchlists, createWatchlist, deleteWatchlist} from "../../actions/watchlist_actions"; 
import CoinIndex from './coin_index'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ entities: { coins, coinData, watchlists } }) => {
    return ({
    coins: orderer(coins),
    watchlists: orderer(watchlists),
    data: coinData.Data
    })
}

const mdp = (dispatch) => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol)), 
    fetchYear: (symbol) => dispatch(fetchYear(symbol)),
    fetchWatchlists: () => dispatch(fetchWatchlists()),
    deleteWatchlist: (id) => dispatch(deleteWatchlist(id)), 
    createWatchlist: (watchlist) => dispatch(createWatchlist(watchlist))
})

export default connect(msp, mdp)(CoinIndex)
