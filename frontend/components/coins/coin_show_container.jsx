import {connect} from 'react-redux'; 
import {fetchCoins, fetchCoin} from "../../actions/coin_actions"
import CoinShow from './coin_show'; 


const msp = (state, ownProps) => {

    return ({
        // coin: Object.values(state.entities.coins),
        coin: state.entities.coins[ownProps.match.params.symbol], 
        symbol: ownProps.match.params.symbol,
        // coin: Object.values(state.entities.coins)
    })
}

const mdp = (dispatch) => ({
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol))
})

export default connect(msp, mdp)(CoinShow)
