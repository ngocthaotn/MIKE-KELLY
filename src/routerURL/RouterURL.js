import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import HomePage from '../components/HomePage/HomePage';
import ImageControl from '../components/ImageControl/ImageControl';
import ImagesList from '../components/ImagesList/ImagesList';
import Login from '../components/auth/Login/Login';
import ForgotPassword from '../components/auth/ForgotPassword/ForgotPassword';
import firebaseData from '../firebaseConnect';
import { connect } from 'react-redux';
import { setUser, clearUser } from '../redux/users/userActions';
import PageNotFound from '../components/PageNotFound/PageNotFound';

class RouterURL extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }

  componentDidMount() {
    firebaseData.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.setUser(user);

        return this.setState({
          status: !this.state.status,
        }); //true
      } else {
        this.props.clearUser();

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
    console.log(this.state.status);
    return (
      <Switch>
        {/*Switch => Routes, component => element*/}
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/images'>
          <ImagesList />
        </Route>
        {/* <Route exact path='/about'>
          <About />
        </Route> */}
        <Route exact path={this.state.status ? '/image-control' : '/login'}>
          {this.state.status ? <ImageControl /> : <Login />}
        </Route>
        <Route exact path='/forgot-password'>
          <ForgotPassword />
        </Route>
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
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
export default connect(null, mapDispatchToProps)(RouterURL);
