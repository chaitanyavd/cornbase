import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';
import Modal from '../modal/modal'; 
const NavBar = ({logout, currentUser, openModal}) => {

    const loggedOut  = () => (
        <div className = "loggedout-navbar">
            <div className="navbar-container" >
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
        </div>
    )

    const loggedIn = () => (
      <div className="loggedin-navbar">
        <div className="navbar-container">
          <div id="navbar-session-buttons">
            <Link className="cornbase-logo-loggedout" to="/">
              <h2>cornbase</h2>
            </Link>
            <nav id="home-button">
              <Link className="login-link-out" to="/">
                Home
              </Link>
            </nav>
            <nav id="home-button">
              <Link className="login-link-out" to="/price">
                Prices
              </Link>
            </nav>
          </div>
          <div id="butt-mod">
            <button
              className="logout-button"
              onClick={() => openModal("profileAvatar")}
            >
              <img src="corn-avatar.jpg" width="50" height="50" />
            </button>
            <Modal />
          </div>
        </div>
      </div>
    );
    return currentUser ? loggedIn() : loggedOut();
}

export default NavBar; 

