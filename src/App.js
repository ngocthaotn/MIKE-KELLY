import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import RouterURL from './routerURL/RouterURL';
import { withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { connect } from 'react-redux';
import firebaseData from './firebaseConnect';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import history from './history';
import { setUser, clearUser } from './redux/users/userActions';

class App extends Component {
  //check user
  componentDidMount() {
    firebaseData.auth().onAuthStateChanged((user) => {
      if (user) {
        history.replace('/image-control');
        this.props.setUser(user);
      } else {
        history.replace('/');
        this.props.clearUser();
      }
    });
  }
  componentWillUnmount() {
    return null;
  }
  render() {
    return (
      <div className='container'>
        <div className='row flex-column flex-xxl-row mb-4'>
          <ToastContainer position='top-right' />
          <Navbar />
          <RouterURL />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (user) => {
      dispatch(setUser(user));
    },
    clearUser: () => {
      dispatch(clearUser());
    },
  };
};
export default withRouter(connect(null, mapDispatchToProps)(App));
