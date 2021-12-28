import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
class Manager extends Component {
  render() {
    return (
      <NavLink className='nav-link' to='/image-control'>
        Manager
      </NavLink>
    );
  }
}

export default Manager;
