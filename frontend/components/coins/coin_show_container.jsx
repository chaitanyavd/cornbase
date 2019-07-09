import {connect} from 'react-redux'; 
import { fetchCoins, fetchCoin, fetchAll, fetchYear, fetchMonth, fetchWeek, fetchDay, fetchHour} from "../../actions/coin_actions"
import CoinShow from './coin_show'; 


const msp = (state, ownProps) => {

    return ({
        coin: state.entities.coins[ownProps.match.params.symbol], 
        symbol: ownProps.match.params.symbol,
        data: state.entities.coinData.Data
    })
}

const mdp = (dispatch) => ({
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol)),
    fetchAll: (symbol) => dispatch(fetchAll(symbol)), 
    fetchYear: (symbol) => dispatch(fetchYear(symbol)),
    fetchMonth: (symbol) => dispatch(fetchMonth(symbol)),
    fetchWeek: (symbol) => dispatch(fetchWeek(symbol)),
    fetchDay: (symbol) => dispatch(fetchDay(symbol)),
    fetchHour: (symbol) => dispatch(fetchHour(symbol))
})

export default connect(msp, mdp)(CoinShow)
