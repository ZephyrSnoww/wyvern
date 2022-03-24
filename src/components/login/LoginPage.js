import React from 'react';
import sdk from 'matrix-js-sdk';
import { Link } from 'react-router-dom';
import ParticlesPreset from '../decoration/Particles';
import './LoginPage.css';

class LoginPage extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      createAccount: false,
      alertText: ':)',
      alertTextEnabled: false
    };

    this.client = sdk.createClient('https://matrix.org');
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: (e.target.name === 'createAccount') ? (e.target.checked) : (e.target.value)
    });
  }

  handleMatrixError (error) {
    this.setState({
      alertText: error.message,
      alertTextEnabled: true
    });

    console.log(error.data);
    console.log(error);
  }

  handleMatrixLogin (response) {
    this.props.setState('token', response.access_token);
    // this.props.setState("sessionID", response.session_id);
    console.log(response);
    window.location.pathname = '/';
  }

  handleFormSubmit (e) {
    e.preventDefault();

    if (this.state.createAccount) {
      if ([this.state.username, this.state.password, this.state.passwordConfirm].includes('')) {
        return this.setState({
          alertText: 'You must fill in all boxes!',
          alertTextEnabled: true
        });
      }

      if (this.state.password !== this.state.passwordConfirm) {
        return this.setState({
          alertText: "Your passwords don't match!",
          alertTextEnabled: true
        });
      }

      return this.client.isUsernameAvailable(this.state.username).then((response) => {
        // return this.client.login("m.login.password", {
        //     user: this.state.username,
        //     password: this.state.password
        // }).then((r) => this.handleMatrixLogin(r))
        //     .catch((e) => this.handleMatrixError(e));
        this.client.register(
          this.state.username,
          this.state.password
          // this.client.sessionId,
          // {type: "password"}
        ).then((response2) => {
          console.log(response2);
        }).catch((e) => this.handleMatrixError(e));
      }).catch((e) => this.handleMatrixError(e));
    } else {
      if ([this.state.username, this.state.password].includes('')) {
        return this.setState({
          alertText: 'You must fill in all boxes!',
          alertTextEnabled: true
        });
      }

      return this.client.login('m.login.password', {
        user: this.state.username,
        password: this.state.password
      }).then((r) => this.handleMatrixLogin(r))
        .catch((e) => this.handleMatrixError(e));
    }
  }

  render () {
    return (
      <div className='login-page'>
        <ParticlesPreset />
        <form className='login-form' onSubmit={(e) => this.handleFormSubmit(e)}>
          <Link to='/' className='login-back-button'>{'< Back'}</Link>

          <div
            className='alert-text' style={{
              opacity: this.state.alertTextEnabled ? 1 : 0
            }}
          >{this.state.alertText}
          </div>

          <input type='text' placeholder='Username' autoComplete='off' name='username' className='login-input login-username-input' value={this.state.username} onChange={(e) => this.handleChange(e)} />

          <input type='password' placeholder='Password' autoComplete='off' name='password' className='login-input login-password-input' value={this.state.password} onChange={(e) => this.handleChange(e)} />
          <input
            type='password' placeholder='Confirm Password' autoComplete='off' name='passwordConfirm' className='login-input login-password-input' value={this.state.passwordConfirm} onChange={(e) => this.handleChange(e)} style={{
              opacity: this.state.createAccount ? 1 : 0
            }}
          />

          <button type='submit' className='login-input login-button'>{(this.state.createAccount) ? 'Create Account' : 'Log In'}</button>

          <div className='create-account'>
            Create account?
            <input type='checkbox' name='createAccount' className='create-account-checkbox' value={this.state.createAccount} onChange={(e) => this.handleChange(e)} />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
