import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <aside className='col-12 col-md-4 col-xl-3 col-xxl-2 p-0 bg-white mt-5'>
        <nav
          className='navbar navbar-expand-md navbar-white bd-white flex-md-column flex-row py-2 sticky-top'
          id='sidebar'
        >
          <a className='navbar-brand' href='/'>
            <img
              className='image-fluid'
              src='https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1524871266847-1645UR5VMWWJLZ1QPC6S/mike-kelley-logo.png?format=750w'
              alt=''
              width='240'
              height='40'
            />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#nav'
            aria-controls='nav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='nav'>
            <ul className='navbar-nav flex-column mt-2'>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/'>
                  HOME
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/portfolio'>
                  PORTFOLIO
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  ABOUT
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/books'>
                  BOOKS
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/printshop'>
                  PRINT SHOP
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  CONTACT
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/signin'>
                  SIGN IN
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/images'>
                  SHOW IMAGE
                </NavLink>
              </li>
              {/* <li className='nav-item'>
                <NavLink className='nav-link' to='/images-list-control'>
                  SHOW IMAGE LIST
                </NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}

export default Navbar;
