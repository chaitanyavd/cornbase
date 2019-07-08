import React from 'react'; 
import {Route} from 'react-router-dom'; 
import NavBarContainer from './navbar/navbar_container'; 
import LoginFormContainer from './session_form/login_form_container'; 
import SignupFormContainer from './session_form/signup_form_container'; 
import CoinIndexContainer from './coins/coin_index_container'; 
import CoinShowContainer from './coins/coin_show_container'; 
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal'; 


const App = () => (
    <div className = "main-container">
        <Modal/>
        <NavBarContainer/>
        <Route exact path="/price" component={CoinIndexContainer} />
        <Route  exact path="/price/:symbol" component={CoinShowContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />

    </div>
)

export default App; 

