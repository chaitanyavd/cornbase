import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login, clearErrors } from '../../actions/session_actions';
import SignupForm from './signup_form'; 
import SplashOut from '../splash/splash_out'; 

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session, 
        email: ''
    };
};

const mapDispatchToProps = dispatch => {
    return {
        signup: (user) => dispatch(signup(user)),
        demoUser: (user) => dispatch(login(user)),
        clearErrors: ()=> dispatch(clearErrors())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
