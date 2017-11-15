import React, { Component } from 'react';
import auth_logo from '../../auth_logo.png';
import AuthService from '../../services/authService';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);
    
        this.authService = new AuthService();
    
        this.state = {
          username: '',
          password: '',
          loginErrors: '',
          successMessage: ''
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.clear = this.clear.bind(this);
      }
    
      handleChange(prop, val) {
        this.setState({
          [prop]: val
        });
      }
    
      login() {
        console.log(`logging in with U: ${this.state.username} P: ${this.state.password}`);
        this.authService.login(this.state.username, this.state.password)
        .then(response => {
          this.clear();
          this.setState({ successMessage: 'Successfully Logged In!' });
          this.props.history.push('/Home');
        })
        .catch(err => {
          this.clear();
          this.setState({ loginErrors: 'Login Error: Please try enter your credentials and try again' });
        });
      }
    
      register() {
        console.log(`registering with ${this.state.username} ${this.state.password}`);
        this.authService.register(this.state.username, this.state.password)
        .then(response => {
          this.clear();
          this.setState({ successMessage: `Successfully created user ${this.state.username}` });
        })
        .catch(err => {
          this.clear();
          this.setState({ loginErrors: 'Registration Error: Please enter a username and password and try again'});
        });
      }
    
      clear() {
        this.setState({ loginErrors: '', successMessage: '' });
      }
    
      render() {
        const { username, password } = this.state;
    
        const loginErrors = this.state.loginErrors ? <div className="error_container">{this.state.loginErrors}</div> : null;
        const successMessage = this.state.successMessage ? <div className="success_container">{this.state.successMessage}</div> : null;
    
        return (
          <div className="auth_container">
            <div className="login_reg" >
              <div>
                <img src={auth_logo} alt="house logo" className="house_logo" />
              </div>
              <span>Username</span>
              <input className="auth_input_user" value={username} type="username" onChange={(e) => this.handleChange('username', e.target.value)} />
              <span>Password:</span>
              <input className="auth_input_pass" value={password} type="password" onChange={(e) => this.handleChange('password', e.target.value)} />
            </div>
       
            <div className="button_container">
              <button className="login_button" onClick={this.login}>Login</button>
              <button className="register_button" onClick={this.register}>Register</button>
            </div>
          
            {loginErrors}
            {successMessage}
          </div>
        );
      }
    
}

export default Login;