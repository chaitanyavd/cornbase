import {connect} from 'react-redux'; 
import {fetchCoins, fetchCoin} from '../../actions/coin_actions';
import CoinIndex from './coin_index'; 

const msp = ({ entities: { coins } }) => {
    // debugger 
    return ({
    coins: Object.values(coins)
})

}

const mdp = (dispatch) => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    fetchCoin: (id) => dispatch(fetchCoin(id))
})

export default connect(msp, mdp)(CoinIndex)


