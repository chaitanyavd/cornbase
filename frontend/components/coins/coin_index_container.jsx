import {connect} from 'react-redux'; 
import {fetchCoins, fetchCoin, fetchYear} from '../../actions/coin_actions';
import CoinIndex from './coin_index'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ entities: { coins, coinData } }) => {
    return ({
    coins: orderer(coins),
    data: coinData.Data
    })
}

const mdp = (dispatch) => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol)), 
    fetchYear: (symbol) => dispatch(fetchYear(symbol))
})

export default connect(msp, mdp)(CoinIndex)
