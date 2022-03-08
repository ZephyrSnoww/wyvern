import React from "react";
import ParticlesPreset from "../decoration/Particles";
import './LoginPage.css';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            createAccount: false
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="login-page">
                <ParticlesPreset />
                <form className="login-form" onSubmit={(e) => this.handleFormSubmit(e)}>
                    <input type="text" autoComplete="off" name="username" className="login-input login-username-input" value={this.state.username} onChange={(e) => this.handleChange(e)} />
                    <input type="password" autoComplete="off" name="password" className="login-input login-password-input" value={this.state.password} onChange={(e) => this.handleChange(e)} />
                    <button type="submit" className="login-input login-button">Log In</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;
