import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const NavBar = ({logout, currentUser, openModal}) => {

    const loggedOut  = () => (
        <div className = "loggedout-navbar">
            <Link className = "cornbase-logo-loggedin" to = "/"><h2>cornbase</h2></Link>
            <nav>
                <Link className="login-link" to="/price">Prices</Link>
            </nav>
            <nav className = "login-signup-container" >
                <div className = "login-link-container">
                    <Link className="login-link" to="/login">Sign In</Link>
                </div>
                <div className = "signup-link-container">
                    <Link className="signup-link" to="/signup">Get Started</Link>
                </div>
            </nav>
        </div>
    )

    const loggedIn = () => (
        <div className = "loggedin-navbar">
            <Link className="cornbase-logo-loggedout" to="/"><h2>cornbase</h2></Link>
            <nav>
                <Link className="login-link-out" to="/price">Prices</Link>
            </nav>

            <button className="logout-button" onClick={()=> openModal('profileAvatar')}><img src="profile-avatar.jpeg" width = "32" height = "32"/></button>

        </div>
    )
    return currentUser ? loggedIn() : loggedOut();
}

export default NavBar; 