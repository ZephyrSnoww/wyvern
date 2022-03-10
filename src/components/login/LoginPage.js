import React from "react";
import { Link } from "react-router-dom";
import ParticlesPreset from "../decoration/Particles";
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            passwordConfirm: "",
            createAccount: false,
            alertText: ":)",
            alertTextEnabled: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: (e.target.name === "createAccount") ? (e.target.checked) : (e.target.value)
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();

        if (this.state.createAccount) {
            if ([this.state.username, this.state.password, this.state.passwordConfirm].includes("")) {
                return this.setState({
                    alertText: "You must fill in all boxes!",
                    alertTextEnabled: true
                });
            }

            if (this.state.password !== this.state.passwordConfirm) {
                return this.setState({
                    alertText: "Your passwords don't match!",
                    alertTextEnabled: true
                });
            }
        }
        else {
            if ([this.state.username, this.state.password].includes("")) {
                return this.setState({
                    alertText: "You must fill in all boxes!",
                    alertTextEnabled: true
                });
            }
        }

        console.log(`\
        USERNAME: ${this.state.username}
        PASSWORD: ${this.state.password}
        CREATE ACCOUNT? : ${this.state.createAccount}\
        `.replace(/[ ]{2,}/gm, ""));
    }

    render() {
        return (
            <div className="login-page">
                <ParticlesPreset />
                <form className="login-form" onSubmit={(e) => this.handleFormSubmit(e)}>
                    <Link to="/" className="login-back-button">{"< Back"}</Link>

                    <div className="alert-text" style={{
                        opacity: this.state.alertTextEnabled ? 1 : 0
                    }}>{this.state.alertText}</div>

                    <input type="text" placeholder="Username" autoComplete="off" name="username" className="login-input login-username-input" value={this.state.username} onChange={(e) => this.handleChange(e)} />

                    <input type="password" placeholder="Password" autoComplete="off" name="password" className="login-input login-password-input" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                    <input type="password" placeholder="Confirm Password" autoComplete="off" name="passwordConfirm" className="login-input login-password-input" value={this.state.passwordConfirm} onChange={(e) => this.handleChange(e)} style={{
                        opacity: this.state.createAccount ? 1 : 0
                    }} />

                    <button type="submit" className="login-input login-button">{(this.state.createAccount) ? "Create Account" : "Log In"}</button>

                    <div className="create-account">
                        Create account?
                        <input type="checkbox" name="createAccount" className="create-account-checkbox" value={this.state.createAccount} onChange={(e) => this.handleChange(e)} />
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;
