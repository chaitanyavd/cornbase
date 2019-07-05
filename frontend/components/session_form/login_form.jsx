import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuestSubmit = this.handleGuestSubmit.bind(this)

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user).then(() => this.props.history.push("/"))
    }

    handleGuestSubmit(e) {
        e.preventDefault();
        this.props.demoUser({email: "demo@user.com", password: "password" }).then(() => this.props.history.push("/"))
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="login-form-content">
                <h4 className="login-form-title" >Sign in to Cornbase</h4>
                
                <div className="login-form-container">
               
                    <form className="login-form-box">

                        <div className = "login-form-row" >

                            <div className = "login-container">
                                <input placeholder = "Email" type="text" value={this.state.email} onChange={this.update("email")} className="login-input" />
                            </div>

                        </div>

                        <div className = "login-form-row" >

                            <div className = "login-container">
                                <input placeholder="Password" type="text" value={this.state.password} onChange={this.update("password")} className="login-input" />
                            </div>

                        </div>

                        <div className="login-form-row" >

                            <button onClick={this.handleSubmit} className="login-button">Sign In</button>
                            <button onClick = {this.handleGuestSubmit} className="demo-button">Demo User</button>
                            
                        </div>

                    </form>
                   
                </div>

            </div>
        )
    }
}

export default withRouter(LoginForm);