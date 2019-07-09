import {connect} from 'react-redux'; 
import { fetchCoins, fetchCoin, fetchYear} from "../../actions/coin_actions"
import CoinShow from './coin_show'; 


const msp = (state, ownProps) => {

    // let data = {}; 
    // state.entities.coinData.data.forEach((day, idx)=>(
    //     data[idx] = day 
    // ))


    return ({
        coin: state.entities.coins[ownProps.match.params.symbol], 
        symbol: ownProps.match.params.symbol,
        data: state.entities.coinData.Data
    })
}

const mdp = (dispatch) => ({
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol)),
    fetchYear: (symbol) => dispatch(fetchYear(symbol))
})

export default connect(msp, mdp)(CoinShow)
