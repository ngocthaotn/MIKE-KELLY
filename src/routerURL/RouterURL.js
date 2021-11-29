import React, { Component } from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Contact from '../components/Contact/Contact';
import HomePage from '../components/HomePage/HomePage';
import ImageListControl from '../components/ImageListControl/ImageListControl';
import ImagesList from '../components/ImagesList/ImagesList';
import SignIn from '../components/SignIn/SignIn';
import AddImage from '../components/AddImage/AddImage';

class RouterURL extends Component {
  render() {
    return (
      <Switch>
        {/*Switch => Routes, conponent => element*/}
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/add-image'>
          <AddImage />
        </Route>
        <Route path='/images'>
          <ImagesList />
        </Route>
        <Route path='/images-list-control'>
          <ImageListControl />
        </Route>
      </Switch>
    );
  }
}

export default RouterURL;
