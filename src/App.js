import React, { Component } from 'react';
import auth_logo from './auth_logo.png';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind( this );
  }

handleChange(prop,val){
  this.setState({
    [prop]:val
  });
}

  
  render() {
    console.log(this.state)
    const { username, password } =this.state;

    return (
      <div className="auth_container">
        <div className="login_reg" >
          <img src={auth_logo} alt="house logo" className="house_logo"/>
          <span>Username</span>
          <input className="auth_input_user" value={ username }type="username" onChange={ (e) => this.handleChange('username', e.target.value)}/>
          <span>Password:</span>
          <input className="auth_input_pass" value={ password } type="password" onChange={(e) => this.handleChange('password',e.target.value) }/>
        </div> 
     <div className="button_container">
          <button className ="login_button">Login</button>
          <button className ="register_button">Register</button>
      </div>

      </div>
    );
  }
}

export default App;
