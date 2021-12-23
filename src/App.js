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
import ImageControl from './components/ImageControl/ImageControl';
import HomePage from './components/HomePage/HomePage';

class App extends Component {
  componentDidMount() {
    firebaseData.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push('/');
        this.props.setUser(user);
      } else {
        history.push('/login');
        this.props.clearUser();
      }
    });
  }

  render() {
    const { loading } = this.props;
    return (
      <div className='container'>
        <div className='row flex-column flex-md-row'>
          <ToastContainer position='top-right' />
          <Navbar />
          <RouterURL />
          {/* {loading ? <HomePage /> : <RouterURL />} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setUser: (setUser) => {
      dispatch({ type: 'SET_USER', setUser });
    },
    clearUser: () => {
      dispatch({ type: 'CLEAR_USER' });
    },
  };
};
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
