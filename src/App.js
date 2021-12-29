import React, { Component } from 'react';
import Navbar from './components/NavBar/Navbar';
import RouterURL from './routerURL/RouterURL';
import { ToastContainer } from 'react-toastify';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row flex-column flex-xl-row flex-xxl-row mb-4'>
          <ToastContainer position='top-right' />
          <Navbar />
          <RouterURL />
        </div>
      </div>
    );
  }
}

export default App;
