import React from 'react';
import { withRouter } from 'react-router-dom';


class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user)
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
            <div className="log-in-page-container">
                <h4 className="log-in-form-title" >Sign in to Cornbase</h4>
                <br />
                <div className="log-in-form-container">
                <form onSubmit={this.handleSubmit} className="log-in-form-box">
                    <label>Email
                    <input type="text" value={this.state.email} onChange={this.update("email")} className="log-in-input" />
                    </label>
                    <br />
                    <br />
                    <label>Password
                    <input type="text" value={this.state.password} onChange={this.update("password")} className="log-in-input" />
                    </label>
                    <br />
                    <input type="checkbox" /> <span>Keep me signed in on this computer</span>
                    <input type="submit" value="Sign In" className="log-in-submit" />
                </form>
                </div>
            </div>
        )
    }
}

export default withRouter(LoginForm);