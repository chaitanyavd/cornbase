import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        // this.handleGuestSubmit = this.handleGuestSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this); 

    }

    componentWillMount(){
        this.props.clearErrors(); 
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


    async demoLogin(e) {
        e.preventDefault();

        const demoUser = {
            email: 'demo@cornbase.com',
            password: 'buysomecorns'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.querySelector('.email-input').focus();
        for (let i = 1; i <= demoUser.email.length; i++) {
            this.setState({ email: demoUser.email.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.querySelector('.password-input').focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.querySelector('.login-button').click();
        document.querySelector('.password-input').blur();
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
                            <div className="errors">
                                {this.renderErrors()}
                            </div>

                        <div className = "login-form-row" >

                            <div className = "login-container">
                                <input placeholder="Email" type="email" value={this.state.email} spellCheck="false" onChange={this.update("email")} className="email-input" />
                            </div>

                        </div>

                        <div className = "login-form-row" >

                            <div className = "login-container">
                                <input placeholder="Password" type="password" value={this.state.password} onChange={this.update("password")} className="password-input" />
                            </div>

                        </div>

                        <div className="login-form-row" >

                            <button onClick={this.handleSubmit} className="login-button">Sign In</button>
                            <button onClick = {this.demoLogin} className="demo-button">Demo User</button>
                            
                        </div>

                    </form>
                   
                </div>
                <div>
                    <Link className="signup-redirect" to={"./signup"}><span>Don't have a Cornbase account?</span></Link>
                </div>

            </div>
        )
    }
}

export default withRouter(LoginForm);