import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import {fetchCoins} from '../../actions/coin_actions'; 
import {fetchWatchlists} from '../../actions/watchlist_actions'; 

import SplashOut from './splash_out'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ session, entities: { coins, watchlist, users } }) => {
    return ({
        coins: orderer(coins),
        watchlist: orderer(watchlist), 
        currentUser: users[session.id]
    })
}


const mdp = dispatch => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    fetchWatchlists: ()=> dispatch(fetchWatchlists()),
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(msp, mdp)(SplashOut);
