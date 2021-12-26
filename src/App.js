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
        history.push('/image-control');
        this.props.setUser(user);
      } else {
        history.push('/');
        this.props.clearUser();
      }
    });
  }

  render() {
    //const { loading } = this.props;
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

const mapStateToProps = ({ user: { loading } }) => {
  return {
    loading: loading,
  };
};
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
