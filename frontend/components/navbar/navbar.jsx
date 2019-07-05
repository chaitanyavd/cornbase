import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({logout, currentUser}) => {

    const loggedOut  = () => (
        <div className = "loggedout-navbar">
            <h2>cornbase</h2>
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
            <h2>cornbase</h2>
            <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    )
    return currentUser ? loggedIn() : loggedOut();
}

export default NavBar; 