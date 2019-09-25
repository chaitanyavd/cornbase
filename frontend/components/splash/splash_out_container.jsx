import { connect } from 'react-redux';

import { signup } from '../../actions/session_actions';
import {fetchCoins, fetchDay} from '../../actions/coin_actions'; 
import {fetchWatchlists, deleteWatchlist} from '../../actions/watchlist_actions'; 
import {openGrid, closeGrid} from '../../actions/grid-actions'

import SplashOut from './splash_out'; 


const orderer = (coins) => {
    let ordArr = [];
    coins = Object.values(coins);
    coins.forEach((coin) => ordArr[coin.rank - 1] = coin)
    return ordArr
}

const msp = ({ session, entities: { coins, watchlists, users, coinData }, ui: {grid} }) => {
    
    return {
      coins: orderer(coins),
      watchlists: orderer(watchlists),
      data: coinData.length ? coinData : [],
      currentUser: users[session.id],
      grid: grid
    };
}


const mdp = dispatch => ({
    fetchCoins: ()=> dispatch(fetchCoins()),
    fetchDay: (symbol)=> dispatch(fetchDay(symbol)),
    fetchWatchlists: ()=> dispatch(fetchWatchlists()),
    deleteWatchlist: (id) => dispatch(deleteWatchlist(id)), 
    signup: (user) => dispatch(signup(user)),
    openModal: (modal) => dispatch(openModal(modal)), 
    openGrid: (grid) => dispatch(openGrid(grid)), 
    closeGrid: ()=> dispatch(closeGrid())
});

export default connect(msp, mdp)(SplashOut);
