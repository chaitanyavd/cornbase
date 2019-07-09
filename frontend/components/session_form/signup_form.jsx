import React from 'react';
import { withRouter } from 'react-router-dom';


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {email: '', password: '', first_name: '', last_name: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleGuestSubmit = this.handleGuestSubmit.bind(this)
        this.renderErrors = this.renderErrors.bind(this)
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        })
    }
    
    componentWillMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault(); 
        const user = Object.assign({}, this.state);
        this.props.signup(user).then(()=> this.props.history.push("/"))
    }

    handleGuestSubmit(e) {
        e.preventDefault();
        this.props.demoUser({ email: "demo@cornbase.com", password: "buysomecorns" }).then(() => this.props.history.push("/"))
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
            <div className = "sign-up-form-content">
                <h4 className = "sign-up-form-title" >Create your account</h4>

                <div className = "sign-up-form-container">

                    <form className="sign-up-form-box">

                        <div className = "sign-up-form-row">

                            <label className = "signup-label-container">
                                <div className="signup-label-content">
                                    <div>
                                        First name
                                    </div>
                                </div>

                                <div className="signup-input-container">
                                    <input className="signup-input" placeholder = "First name" type="text" value={this.state.first_name} onChange={this.update("first_name")} />
                                </div>
                            </label>

                            <label className = "signup-label-container" >
                                <div className="signup-label-content">
                                    <div>
                                        Last name
                                    </div>
                                </div>
                                <div className="signup-input-container">
                                    <input className= "signup-input" placeholder="Last name" type="text" value={this.state.last_name} onChange={this.update("last_name")}/>
                                </div>
                            </label>

                        </div>

                    

                        <div className= "sign-up-form-row">

                            <label className="signup-label-container" >

                                <div className="signup-label-content">
                                    <div>
                                        Email
                                    </div>
                                </div>

                                <div className="signup-input-container">
                                    <input className="signup-input" placeholder="Your email address" type="email" value={this.state.email} onChange={this.update("email")}  />
                                </div>

                            </label>
                        </div>

                    

                        <div className="sign-up-form-row">
                           
                            <label className="signup-label-container" >

                                <div className="signup-label-content">
                                    <div>
                                        Password
                                    </div>
                                </div>

                                <div className="signup-input-container">
                                    <input className="signup-input" placeholder="Choose a password" type="text" value={this.state.password} onChange={this.update("password")} />
                                </div>
                                <div className="errors">
                                    {this.renderErrors()}
                                </div>

                            </label>

                        </div>


                        {/* <div className="sign-up-form-row">
                            <input type="checkbox" /> <span>By continuing I certify that I am 18 years of age, and I agree to the User Agreement and Privacy Policy</span>
                        </div> */}

                        <button onClick = {this.handleSubmit} className = "signup-button">
                            <span>Create account</span>
                        </button>

                        <button onClick={this.handleGuestSubmit} className="signupdemo-button" >Demo User</button>
                    </form>
                
                </div>

                <div className="signup-redirect">
                    <span>Already have a Cornbase account?</span>
                </div>

            </div>
        )
    }
}

export default withRouter(SignupForm);