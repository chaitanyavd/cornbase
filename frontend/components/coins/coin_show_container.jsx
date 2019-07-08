import {connect} from 'react-redux'; 
import {fetchCoins, fetchCoin} from "../../actions/coin_actions"
import CoinShow from './coin_show'; 


const msp = ({ entities: { coins } }, ownProps) => {
    // debugger
    return ({
        coin: coins[ownProps.match.params.symbol] 
    })
}

const mdp = (dispatch) => ({
    fetchCoin: (symbol) => dispatch(fetchCoin(symbol))
})

export default connect(msp, mdp)(CoinShow)
