import { connect } from 'react-redux';

import { signup } from '../../../actions/session_actions';
import {fetchSplashCoins} from '../../../actions/coin_actions'; 

import SplashOut from './splash_out'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ entities: { coins } }) => {
    return ({
        coins: orderer(coins)
    })
}


const mdp = dispatch => ({
    fetchSplashCoins: ()=> dispatch(fetchSplashCoins()), 
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(SplashOut);