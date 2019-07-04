import React from 'react';
import { withRouter } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: '', first_name: '', last_name: ''}
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
        this.props.signup(user).then(()=> this.props.history.push("/"))
    }

    handleGuestSubmit(e) {
        e.preventDefault();
        this.props.demoUser({ email: "demo@user.com", password: "password" }).then(() => this.props.history.push("/"))
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
            <div className = "sign-up-form-container">
                <h4 className = "sign-up-form-title" >Create your account</h4>
                <br/>
                <form onSubmit={this.handleSubmit} className="sign-up-form-box">
                    <label>First name
                    <input type="text" value={this.state.first_name} onChange={this.update("first_name")} className="sign-up-input"/>
                    </label>
                    <label>Last name
                    <input type="text" value={this.state.last_name} onChange={this.update("last_name")} className="sign-up-input"/>
                    </label>
                    <br/>
                    <br/>
                    <label>Email
                    <input type="text" value={this.state.email} onChange={this.update("email")} className="sign-up-input"/>
                    </label>
                    <br/>
                    <br/>
                    <label>Password
                    <input type="text" value={this.state.password} onChange={this.update("password")} className="sign-up-input"/>
                    </label>
                    <br/>
                    <input type="checkbox" /> <span>By continuing I certify that I am 18 years of age, and I agree to the User Agreement and Privacy Policy</span>
                    <input type="submit" value = "Create Account" className = "sign-up-submit"/>
                    <button onClick={this.handleGuestSubmit}>Demo User</button>
                </form>
                <span>Already have a Cornbase account?</span>
            </div>
        )
    }
}

export default withRouter(SignupForm);