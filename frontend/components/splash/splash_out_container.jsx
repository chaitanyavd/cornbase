import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import {fetchCoins} from '../../actions/coin_actions'; 

import SplashOut from './splash_out'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ session, entities: { coins, users } }) => {
    return ({
        coins: orderer(coins), 
        currentUser: users[session.id]
    })
}


const mdp = dispatch => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(SplashOut);
