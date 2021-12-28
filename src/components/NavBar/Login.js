import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Login extends Component {
  render() {
    return (
      <NavLink className='nav-link' to='/login'>
        Login
      </NavLink>
    );
  }
}

export default Login;
