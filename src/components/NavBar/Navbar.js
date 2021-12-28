import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './navbar.scss';
import firebaseData from '../../firebaseConnect';
import Manager from './Manager';
import Login from './Login';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  componentDidMount() {
    firebaseData.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('true');
        return this.setState({
          status: !this.state.status,
        }); //true
      } else {
        console.log('false');
        this.setState({
          status: false,
        }); //false
      }
    });
  }
  componentWillUnmount() {
    this.setState({
      status: false,
    });
  }
  render() {
    console.log('state: ' + this.state.status);
    return (
      <aside className='col-12 col-md-4 col-xl-3 col-xxl-2 p-0 bg-white'>
        <nav
          className='navbar navbar-expand-md navbar-white bd-white flex-md-column flex-row sticky-top mt-5'
          id='sidebar'
        >
          <a className='navbar-brand' href='/'>
            <img
              className='image-fluid'
              src='https://images.squarespace-cdn.com/content/v1/5adb89f2aa49a19e7960b934/1524871266847-1645UR5VMWWJLZ1QPC6S/mike-kelley-logo.png?format=750w'
              alt=''
              width='210'
              height='35'
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
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/portfolio'>
                  Portfolio
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/about'>
                  About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/books'>
                  Books
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/printshop'>
                  Print shop
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
              <div className='nav-login'>
                <li className='nav-item'>
                  {/* <NavLink
                    className={this.state.status ? 'nav-link disabled' : 'nav-link'}
                    to='/login'
                  >
                    Login
                  </NavLink> */}
                  <NavLink
                    className='nav-link'
                    to={this.state.status ? '/image-control' : '/login'}
                  >
                    {this.state.status ? 'Manager' : 'Login'}
                  </NavLink>
                </li>
                {/* {this.state ? <Manager /> : <Login />} */}
                {/* {this.changeStatus} */}
                <li className='nav-item'>
                  <NavLink className='nav-link' to='/images'>
                    Show thumbnails
                  </NavLink>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}

export default withRouter(Navbar);
// export default Navbar;
