import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({logout, currentUser}) => {

    const loggedOut  = () => (
        <div className = "loggedout-navbar">
        <h2>CornBase</h2>
        <nav className = "login-signup" >
            <Link to="/login">Sign In</Link>
                
            <Link to="/signup">Get Started</Link>
        </nav>
        </div>
    )

    const loggedIn = () => (
        <div className = "loggedin-navbar">
            <h2>CornBase</h2>
                <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
    )
    return currentUser ? loggedIn() : loggedOut();
}

export default NavBar; 