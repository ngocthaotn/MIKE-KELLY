import React from 'react';
import Navbar from './components/NavBar/Navbar';
import RouterURL from './routerURL/RouterURL';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <Router>
      <div className=' container'>
        <div className='row flex-column flex-md-row'>
          <ToastContainer position='top-right' />
          <Navbar />
          <RouterURL />
        </div>
      </div>
    </Router>
  );
}

export default App;
