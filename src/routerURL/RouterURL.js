import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import HomePage from '../components/HomePage/HomePage';
import ImageControl from '../components/ImageControl/ImageControl';
import ImagesList from '../components/ImagesList/ImagesList';
import Login from '../components/auth/Login/Login';
import ForgotPassword from '../components/auth/ForgotPassword/ForgotPassword';

class RouterURL extends Component {
  render() {
    return (
      <Switch>
        {/*Switch => Routes, component => element*/}
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route exact path='/images'>
          <ImagesList />
        </Route>
        <Route exact path='/image-control'>
          <ImageControl />
        </Route>
        <Route exact path='/forgot-password'>
          <ForgotPassword />
        </Route>
      </Switch>
    );
  }
}

export default RouterURL;
